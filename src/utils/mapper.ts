class Mapper {
    static applyMapper(data: any, mapper: Record<string, string>): any {
        const translatedTexts: any = {};
      
        for (const EnglishKeys in data) {
          const SpanishKeys = mapper[EnglishKeys] || EnglishKeys; 
          translatedTexts[SpanishKeys] = data[EnglishKeys];
        }
      
        return translatedTexts;
      }
}

export default Mapper;