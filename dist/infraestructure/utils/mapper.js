"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Mapper {
    static applyMapper(data, mapper) {
        const translatedTexts = {};
        for (const EnglishKeys in data) {
            const SpanishKeys = mapper[EnglishKeys] || EnglishKeys;
            translatedTexts[SpanishKeys] = data[EnglishKeys];
        }
        return translatedTexts;
    }
}
exports.default = Mapper;
