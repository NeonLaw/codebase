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
import { jsx as _jsx } from "react/jsx-runtime";
import { Box } from '@chakra-ui/react';
export var Container = function (_a) {
    var children = _a.children, _b = _a.isFullBleed, isFullBleed = _b === void 0 ? false : _b;
    return (_jsx(Box, __assign({ maxWidth: !isFullBleed ? 'var(--grid-max-width)' : 'auto', margin: "auto", width: !isFullBleed ? ['95%', '95%', '90%'] : [] }, { children: children }), void 0));
};
