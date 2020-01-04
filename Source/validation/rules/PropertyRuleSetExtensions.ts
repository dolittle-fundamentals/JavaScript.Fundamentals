// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { Email, GreaterThan, GreaterThanOrEqual, LessThan, LessThanOrEqual, MaxLength, NotNull, Regex, Required } from './index';
import { RuleBuilder, PropertyValueRuleBuilder, PropertyRuleSetBuilder, PropertyDescriptor } from '@dolittle/rules';

declare module '@dolittle/rules'
{
    class PropertyRuleSetBuilder {
        readonly propertyDescriptor: PropertyDescriptor;

        /**
         * Defines an email address rule for the property. See {Email}.
         * @returns {PropertyValueRuleBuilder<Email>}
         */
        emailAddress(): PropertyValueRuleBuilder<Email>;

        /**
         * Defines a greater than comparer rule for the property. See {GreaterThan}.
         * @param {*} value - The value that the property has to be greater than.
         * @returns {PropertyValueRuleBuilder<GreaterThan>}
         */
        greaterThan(value: any): PropertyValueRuleBuilder<GreaterThan>;

        /**
         * Defines a greater than or equal comparer rule for the property. See {GreaterThanOrEqual}.
         * @param {*} value - The value that the property has to be greater than or equal to.
         * @returns {PropertyValueRuleBuilder<GreaterThanOrEqual>}
         */
        greaterThanOrEqual(value: any): PropertyValueRuleBuilder<GreaterThanOrEqual>;

        /**
         * Defines a less than comparer rule for the property. See {LessThan}.
         * @param {*} value - The value that the property has to be less than.
         * @returns {PropertyValueRuleBuilder<LessThan>}
         */
        lessThan(value: any): PropertyValueRuleBuilder<LessThan>;

        /**
         * Defines a less than or equal comparer rule for the property. See {LessThanOrEqual}.
         * @param {*} value - The value that the property has to be less than or equal to.
         * @returns {PropertyValueRuleBuilder<LessThanOrEqual>}
         */
        lessThanOrEqual(value: any): PropertyValueRuleBuilder<LessThanOrEqual>;

        /**
         * Defines an max length for the property of type string. See {MaxLength}.
         * @param {number} length - The length of object.
         * @returns {PropertyValueRuleBuilder<MaxLength>}
         */
        maxLength(length: number): PropertyValueRuleBuilder<MaxLength>;

        /**
         * Defines that the property can't be null. See {NotNull}.
         * @returns {PropertyValueRuleBuilder<NotNull>}
         */
        notNull(): PropertyValueRuleBuilder<NotNull>;

        /**
         * Defines an max length for the property of type string. See {MaxLength}.
         * @param {string} expression - The regular expression as a string.
         * @returns {PropertyValueRuleBuilder<Regex>}
         */
        regex(expression: string): PropertyValueRuleBuilder<Regex>;

        /**
         * Defines that the property is required. See {Required}.
         * @returns {PropertyValueRuleBuilder<Required>}
         */
        required(): PropertyValueRuleBuilder<Required>;
    }
}

PropertyRuleSetBuilder.prototype.emailAddress = function() {
    return new PropertyValueRuleBuilder(this.propertyDescriptor, () => new Email());
};

PropertyRuleSetBuilder.prototype.greaterThan = function(value: any) {
    return new PropertyValueRuleBuilder(this.propertyDescriptor, () => new GreaterThan(value));
};

PropertyRuleSetBuilder.prototype.greaterThanOrEqual = function(value: any) {
    return new PropertyValueRuleBuilder(this.propertyDescriptor, () => new GreaterThanOrEqual(value));
};

PropertyRuleSetBuilder.prototype.lessThan = function(value: any) {
    return new PropertyValueRuleBuilder(this.propertyDescriptor, () => new LessThan(value));
};

PropertyRuleSetBuilder.prototype.lessThanOrEqual = function(value: any) {
    return new PropertyValueRuleBuilder(this.propertyDescriptor, () => new LessThanOrEqual(value));
};

PropertyRuleSetBuilder.prototype.maxLength = function(length: number) {
    return new PropertyValueRuleBuilder(this.propertyDescriptor, () => new MaxLength(length));
};

PropertyRuleSetBuilder.prototype.notNull = function() {
    return new PropertyValueRuleBuilder(this.propertyDescriptor, () => new NotNull());
};


PropertyRuleSetBuilder.prototype.regex = function(expression: string) {
    return new PropertyValueRuleBuilder(this.propertyDescriptor, () => new Regex(expression));
};

PropertyRuleSetBuilder.prototype.required = function() {
    return new PropertyValueRuleBuilder(this.propertyDescriptor, () => new Required());
};