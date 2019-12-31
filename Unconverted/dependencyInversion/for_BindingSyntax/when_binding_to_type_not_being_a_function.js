/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import {BindingTargetIsNotBasedOnFunction} from '../BindingTargetIsNotBasedOnFunction';
import * as Context from './given/a_bound_service';

describe('when binding to type not being a function', () => {
    const type = 'Some Constant';
    let context = null;
    let exception = null;
    
    beforeEach(() => {
        context = new Context.default();
        
        (becauseOf => {
            try { context.bindingSyntax.to(type) } catch(e) { exception = e }
        })();
    });

    it('should throw a binding target is not based on function exception', () => exception.should.be.instanceof(BindingTargetIsNotBasedOnFunction));
});