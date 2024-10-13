import { Md5Service } from '../services/md5Service'; // Adjust the path as needed

describe("MD5 Hash Function", () => {
  let md5Service: Md5Service;

  beforeAll(() => {
    md5Service = new Md5Service(); // Initialize the service
  });

  it('should return the correct hash for an empty input', async () => {
    const input = Buffer.from('');
    const hash = await md5Service.md5(input);
    expect(hash.toUpperCase()).toBe('D41D8CD98F00B204E9800998ECF8427E');
  });

  it('should return the expected hash for the input "a"', async () => {
    const input = Buffer.from('a');
    const hash = await md5Service.md5(input);
    expect(hash.toUpperCase()).toBe('0CC175B9C0F1B6A831C399E269772661');
  });

  it('should produce the correct hash for the string "abc"', async () => {
    const input = Buffer.from('abc');
    const hash = await md5Service.md5(input);
    expect(hash.toUpperCase()).toBe('900150983CD24FB0D6963F7D28E17F72');
  });

  it('should return the right hash for "message digest"', async () => {
    const input = Buffer.from('message digest');
    const hash = await md5Service.md5(input);
    expect(hash.toUpperCase()).toBe('F96B697D7CB7938D525A2F31AAF161D0');
  });

  it('should yield the correct hash for the alphabet string', async () => {
    const input = Buffer.from('abcdefghijklmnopqrstuvwxyz');
    const hash = await md5Service.md5(input);
    expect(hash.toUpperCase()).toBe('C3FCD3D76192E4007DFB496CCA67E13B');
  });

  it('should produce the correct hash for mixed alphanumeric string', async () => {
    const input = Buffer.from('ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789');
    const hash = await md5Service.md5(input);
    expect(hash.toUpperCase()).toBe('D174AB98D277D9F5A5611C2C9F419D9F');
  });

  it('should compute the correct hash for a long numeric string', async () => {
    const input = Buffer.from('12345678901234567890123456789012345678901234567890123456789012345678901234567890');
    const hash = await md5Service.md5(input);
    expect(hash.toUpperCase()).toBe('57EDF4A22BE3C955AC49DA2E2107B67A');
  });
});
