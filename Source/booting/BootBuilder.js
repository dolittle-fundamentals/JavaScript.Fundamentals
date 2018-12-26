/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { Boot } from './Boot';
import { BootProcedures } from './BootProcedures';

/**
 * Represents a builder for boot - typically used during configuration
 */
export class BootBuilder {
    #procedures;

    /**
     * Initializes a new instance of {BootBuilder}
     */
    constructor() {
        this.#procedures = new BootProcedures();
    }

    /**
     * Get the {BootProcedures}
     * @returns {BootProcedures} for the {Boot}
     */
    get procedures() { return this.#procedures; }

    /**
     * Build a {Boot} instance
     * @returns {Boot} Configured instance
     */
    build() {
        let boot = new Boot(this.#procedures);
        return boot;
    }
}
