import saleService from './sale.service';

describe('SaleService', () => {
  const service = saleService;
  const compressList = [
    {
      string: 'llllllllllcccccccccgggggggeeeepp',
      compressed: '10l9c7g4e2p',
      percentage: 65,
    },
    {
      string: 'jjjjjjjjjjjjjjjjjjjnnnnnnkkkkkkhhhhh',
      compressed: '19j6n6k5h',
      percentage: 75,
    },
    {
      string: 'ppppppphhhhhhhooooouuuuurrrr',
      compressed: '7p7h5o5u4r',
      percentage: 64,
    },
    {
      string: 'eeeeeeeeeegggggooofffoo',
      compressed: '10e5g3o3f2o',
      percentage: 52,
    },
    {
      string: 'eeeeeeeeegggggggvvvvvvvuuuuuqqqq',
      compressed: '9e7g7v5u4q',
      percentage: 68,
    },
  ];

  it('should compress string', () => {
    for (const compress of compressList) {
      const compressed = service.compressString(compress.string);
      expect(compressed.compressedString).toEqual(compress.compressed);
      expect(compressed.percentage).toEqual(compress.percentage);
    }
  });

  it('should uncompress string', () => {
    for (const compress of compressList) {
      const string = service.uncompressString(compress.compressed);
      expect(string).toEqual(compress.string);
    }
  });
});
