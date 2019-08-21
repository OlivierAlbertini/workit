import { SpanContext } from '@opencensus/core';
import { IMessageBase } from '../../camunda-n-mq/specs/message';
import { DEBUG_VALUE, JAEGER_DEBUG_HEADER, JaegerFormat, SAMPLED_VALUE } from './jaegerFormat';

export class SimpleFormat extends JaegerFormat {
  private static getOptions(debugId: string, jflags: number) {
    /* tslint:disable:no-bitwise */
    const sampled = jflags & SAMPLED_VALUE;
    const debug = jflags & DEBUG_VALUE || (debugId ? SAMPLED_VALUE : 0);
    /* tslint:enable:no-bitwise */
    return sampled || debug ? SAMPLED_VALUE : 0;
  }
  private static getFlags(tracerStateHeaderParts: string[]) {
    return Number(`0x${isNaN(Number(tracerStateHeaderParts[3])) ? SAMPLED_VALUE : Number(tracerStateHeaderParts[3])}`);
  }
  public extractFromMessage(message: IMessageBase): SpanContext | null {
    if (!message.body.requestInfo) {
      return null;
    }

    const debugId = message.body.requestInfo[JAEGER_DEBUG_HEADER];
    const tracerStateHeader = this.parseHeader(message.body.requestInfo.vdmTraceId);

    if (!tracerStateHeader) {
      return null;
    }

    const tracerStateHeaderParts = tracerStateHeader.split(':');
    if (tracerStateHeaderParts.length !== 4) {
      return null;
    }

    const traceId = tracerStateHeaderParts[0];
    const spanId = tracerStateHeaderParts[1];
    const jflags = SimpleFormat.getFlags(tracerStateHeaderParts);

    const options = SimpleFormat.getOptions(debugId, jflags);

    return { traceId, spanId, options };
  }
}
