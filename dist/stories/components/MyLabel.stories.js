"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomFontColor = exports.Tertiary = exports.Secondary = exports.AllCaps = exports.Basic = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var MyLabel_1 = require("./MyLabel");
exports.default = {
    title: 'example/Label',
    component: MyLabel_1.MyLabel,
    argTypes: {
        label: { control: 'text' },
        size: { control: {
                type: 'select',
                options: ['normal', 'h1', 'h2', 'h3'],
            } },
        color: { control: {
                type: 'select',
                options: ['primary', 'secondary', 'tertiary']
            } },
        fontColor: { control: 'color' },
        allCaps: { control: 'boolean', active: false }
    }
};
var Template = function (args) { return (0, jsx_runtime_1.jsx)(MyLabel_1.MyLabel, __assign({}, args)); };
exports.Basic = Template.bind({});
// Basic.args = {
// 	size: 'normal',
// 	label: 'Basic'
// }
exports.Basic.args = {
    size: 'normal',
    allCaps: false
};
exports.AllCaps = Template.bind({});
// AllCaps.args = {
// 	size: 'h1',
// 	label: 'Allcaps',
// };
exports.AllCaps.args = {
    size: 'secondary',
    color: 'secondary',
    allCaps: true
};
exports.Secondary = Template.bind({});
exports.Secondary.args = {
    size: 'h2',
    label: 'Secondary',
};
exports.Tertiary = Template.bind({});
exports.Tertiary.args = {
    size: 'normal',
    color: 'tertiary'
};
exports.CustomFontColor = Template.bind({});
exports.CustomFontColor.args = {
    size: 'normal',
    fontColor: '#7d97c2'
};
