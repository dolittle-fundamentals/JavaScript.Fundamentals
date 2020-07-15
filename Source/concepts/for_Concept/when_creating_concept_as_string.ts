// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { number_concept } from './given/number_concept';
import { string_concept } from './given/string_concept';
import { some_concept, some_base } from './given/some_concept';
import { Concept } from '../index';

describe('when creating concept as string', () => {
    const value = 'value';
    const concept: string_concept = Concept.fromString(value);
    it('should have the correct value', () => concept.value.should.equal(value));
    it('should equal value', () => concept.equals(value).should.be.true);
    it('should equal itself', () => concept.equals(concept).should.be.true);
    it('should equal to another concept with the same number', () => concept.equals(Concept.fromString(value)).should.be.true);
    it('should not equal to another concept with another string', () => concept.equals(Concept.fromString('some other value')).should.be.false);
    it('should not equal to another concept as a number', () => concept.equals(Concept.fromNumber(2) as any).should.be.false);
    it('should not equal to another concept as something else', () => concept.equals(Concept.from(new some_base('s', 2)) as any).should.be.false);
    it('should be a concept', () => Concept.isConcept(concept).should.be.true);
});