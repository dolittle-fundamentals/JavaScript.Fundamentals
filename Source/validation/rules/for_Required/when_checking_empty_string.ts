// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { RuleContext } from '@dolittle/rules';
import { NotNull } from '../index';
import '@dolittle/rules.testing';

describe('when checking empty string', () => {
    let rule = new NotNull();
    let context = new RuleContext(null);
    let value = '';

    rule.evaluate(context, value);

    it('should not fail', () => context.should.notFail());
});