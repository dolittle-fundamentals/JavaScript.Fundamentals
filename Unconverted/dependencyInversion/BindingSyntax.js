/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import {ScopeSyntax} from './ScopeSyntax';
import {ConstantActivationStrategy} from './Strategies/ConstantActivationStrategy';
import {TypeActivationStrategy} from './Strategies/TypeActivationStrategy';
import {CallbackActivationStrategy} from './Strategies/CallbackActivationStrategy';
import {TransientScope} from './Scopes/TransientScope';
import {Binding} from './Binding';
import {BindingTargetIsNotBasedOnFunction} from './BindingTargetIsNotBasedOnFunction';

const _transientScope = new TransientScope();

/**
 * Represents the syntax for defining a {Binding} in the container 
 */
export class BindingSyntax {
    #container;
    #service;
    #strategy;
    #scopeSyntax;
    
    /**
     * Initializes a new instance of {BindingSyntax}
     * @constructor
     * @param {Object} service Representation of the service - often the name of service in string form 
     */
    constructor(container, service) {
        this.#container = container;
        this.#service = service;
    }

    /**
     * Get the container in which the {BindingSyntax} is for
     * @property {Container}
     */
    get container() {
        return this.#container;
    }

    /**
     * Get the service for the binding
     * @property {Object}
     */
    get service() {
        return this.#service;
    }

    /**
     * Get the {ActivationStrategy} for the binding
     * @property {ActivationStrategy}
     */
    get strategy() {
        return this.#strategy;
    }

    /**
     * Get the {ScopeSyntax} for the binding for defining the scope
     * @property {ScopeSyntax}
     */
    get scopeSyntax() {
        return this.#scopeSyntax;
    }

    /**
     * Bind to a constant
     * @param {Object} constant A constant the service is bound to
     */
    toConstant(constant) {
        let strategy = new ConstantActivationStrategy()
        let scopeSyntax = this.#handleStrategyAndScope(strategy);
        return scopeSyntax;
    }

    /**
     * Bind to a type
     * @param {function} type A type the service is bound to
     */
    to(type) {
        this.#throwIfNotFunction(type);
        var strategy = new TypeActivationStrategy()
        let scopeSyntax = this.#handleStrategyAndScope(strategy);
        return scopeSyntax;
    }

    /**
     * Bind to a callback that will resolve the binding
     * @param {function} fn Function that will be called
     */
    toCallback(fn) {
        this.#throwIfNotFunction(fn);
        var strategy = new CallbackActivationStrategy()
        let scopeSyntax = this.#handleStrategyAndScope(strategy);
        return scopeSyntax;
    }


    #handleStrategyAndScope(strategy) {
        var binding = new Binding(this.service, strategy, _transientScope);
        this.container.add(binding);
    
        this.#strategy = strategy;
    
        var scopeSyntax = new ScopeSyntax();
        this.#scopeSyntax = scopeSyntax;
        return scopeSyntax;
    }

    #throwIfNotFunction(type) {
        if( typeof type !== 'function') BindingTargetIsNotBasedOnFunction.throw(type); 
    }    
}