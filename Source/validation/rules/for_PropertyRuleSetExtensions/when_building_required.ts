// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { ObjectRuleSetContainerBuilder } from '@dolittle/rules';
import '../index';
import { Required } from '../index';

describe('when building not null', () => {
    const expectedValue: number = 42;
    class MyObject {
        get stuff(): number {
            return expectedValue;
        }
    }

    const ruleWithSourceProvider = new ObjectRuleSetContainerBuilder<MyObject>().rulesFor(_ => _.stuff).required().build();

    it('should be a required rule instance', () => ruleWithSourceProvider.rule.should.be.instanceof(Required));
 });