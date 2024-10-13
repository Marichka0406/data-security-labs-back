export class Md5Service {
    private readonly A0 = 0x67452301;
    private readonly B0 = 0xefcdab89;
    private readonly C0 = 0x98badcfe;
    private readonly D0 = 0x10325476;
  
    private readonly S = [
      7, 12, 17, 22, 7, 12, 17, 22, 7, 12, 17, 22, 7, 12, 17, 22, 5, 9, 14, 20,
      5, 9, 14, 20, 5, 9, 14, 20, 5, 9, 14, 20, 4, 11, 16, 23, 4, 11, 16, 23, 4,
      11, 16, 23, 4, 11, 16, 23, 6, 10, 15, 21, 6, 10, 15, 21, 6, 10, 15, 21, 6,
      10, 15, 21,
    ];
  
    private readonly K = new Uint32Array([
      0xd76aa478, 0xe8c7b756, 0x242070db, 0xc1bdceee, 0xf57c0faf, 0x4787c62a,
      0xa8304613, 0xfd469501, 0x698098d8, 0x8b44f7af, 0xffff5bb1, 0x895cd7be,
      0x6b901122, 0xfd987193, 0xa679438e, 0x49b40821, 0xf61e2562, 0xc040b340,
      0x265e5a51, 0xe9b6c7aa, 0xd62f105d, 0x02441453, 0xd8a1e681, 0xe7d3fbc8,
      0x21e1cde6, 0xc33707d6, 0xf4d50d87, 0x455a14ed, 0xa9e3e905, 0xfcefa3f8,
      0x676f02d9, 0x8d2a4c8a, 0xfffa3942, 0x8771f681, 0x6d9d6122, 0xfde5380c,
      0xa4beea44, 0x4bdecfa9, 0xf6bb4b60, 0xbebfbc70, 0x289b7ec6, 0xeaa127fa,
      0xd4ef3085, 0x04881d05, 0xd9d4d039, 0xe6db99e5, 0x1fa27cf8, 0xc4ac5665,
      0xf4292244, 0x432aff97, 0xab9423a7, 0xfc93a039, 0x655b59c3, 0x8f0ccc92,
      0xffeff47d, 0x85845dd1, 0x6fa87e4f, 0xfe2ce6e0, 0xa3014314, 0x4e0811a1,
      0xf7537e82, 0xbd3af235, 0x2ad7d2bb, 0xeb86d391,
    ]);
  
    private readonly PADDING = new Uint8Array([
      0x80, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
      0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
      0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
    ]);
  
    // Публічний метод для хешування вхідних даних
    public async md5(input: Buffer): Promise<string> {
      const hashBuffer = this.generateMd5Hash(input);
      return this.bufferToHex(hashBuffer);
    }
  
    // Перевірка хешу файлу на відповідність
    public async verifyFileIntegrity(
      file: Buffer,
      expectedHash: string,
    ): Promise<boolean> {
      const computedHash = await this.md5(file);
      return computedHash === expectedHash.toLowerCase();
    }
  
    // Приватний метод для генерації MD5-хешу
    private generateMd5Hash(input: Buffer): ArrayBuffer {
      const paddedInput = this.padInput(input);
      const numBlocks = paddedInput.byteLength / 64;
  
      let A = this.A0;
      let B = this.B0;
      let C = this.C0;
      let D = this.D0;
  
      const bufferView = new DataView(paddedInput);
  
      for (let i = 0; i < numBlocks; i++) {
        const blockOffset = i * 64;
  
        let a = A;
        let b = B;
        let c = C;
        let d = D;
  
        for (let j = 0; j < 64; j++) {
          const F = this.calculateF(j, b, c, d);
          const g = this.calculateG(j);
          const tempD = d;
          d = c;
          c = b;
          const blockIndex = blockOffset + (g * 4);
          const blockValue = bufferView.getUint32(blockIndex, true);
          b = (b + this.leftRotate(a + F + this.K[j] + blockValue, this.S[j])) >>> 0;
          a = tempD;
        }
  
        A = (A + a) >>> 0;
        B = (B + b) >>> 0;
        C = (C + c) >>> 0;
        D = (D + d) >>> 0;
      }
  
      return this.createHashBuffer(A, B, C, D);
    }
  
    // Допоміжні функції для MD5
    private calculateF(j: number, b: number, c: number, d: number): number {
      if (j < 16) return (b & c) | (~b & d);
      if (j < 32) return (d & b) | (~d & c);
      if (j < 48) return b ^ c ^ d;
      return c ^ (b | ~d);
    }
  
    private calculateG(j: number): number {
      if (j < 16) return j;
      if (j < 32) return (5 * j + 1) % 16;
      if (j < 48) return (3 * j + 5) % 16;
      return (7 * j) % 16;
    }
  
    // Допоміжна функція для лівого зсуву
    private leftRotate(x: number, amount: number): number {
      return (x << amount) | (x >>> (32 - amount));
    }
  
    // Допоміжна функція для паддінгу вхідних даних
    private padInput(input: Buffer): ArrayBuffer {
      const originalLength = input.byteLength;
      const bitLength = originalLength * 8;
  
      let paddingLength = (56 - (originalLength % 64)) % 64;
      if (paddingLength < 0) paddingLength += 64;
  
      const paddedBuffer = new ArrayBuffer(originalLength + paddingLength + 8);
      const paddedView = new Uint8Array(paddedBuffer);
  
      paddedView.set(input);
      paddedView.set(this.PADDING.subarray(0, paddingLength), originalLength);
  
      const lengthView = new DataView(paddedBuffer);
      lengthView.setUint32(paddedBuffer.byteLength - 8, bitLength, true);
  
      return paddedBuffer;
    }
  
    // Перетворення 4 слів (A, B, C, D) у MD5 хеш у вигляді буфера
    private createHashBuffer(A: number, B: number, C: number, D: number): ArrayBuffer {
      const buffer = new ArrayBuffer(16);
      const view = new DataView(buffer);
      view.setUint32(0, A, true);
      view.setUint32(4, B, true);
      view.setUint32(8, C, true);
      view.setUint32(12, D, true);
      return buffer;
    }
  
    // Перетворення буфера у hex-рядок
    private bufferToHex(buffer: ArrayBuffer): string {
      const byteArray = new Uint8Array(buffer);
      const hexString = Array.from(byteArray)
        .map(byte => byte.toString(16).padStart(2, '0'))
        .join('');
      return hexString;
    }
  }
  