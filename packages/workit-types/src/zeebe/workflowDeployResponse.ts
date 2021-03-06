/*
 * Copyright (c) 2020 Ville de Montreal. All rights reserved.
 * Licensed under the MIT license.
 * See LICENSE file in the project root for full license information.
 */

import { IWorkflow } from '../core/camunda';

export interface IWorkflowDeployResponse {
  key: string;
  workflows: IWorkflow[];
}
