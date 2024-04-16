export class MockSquareRootService {
  calculateSquareRoot(value: number): number {
    // Perform a predefined square root calculation based on the input value
    if (value === 4) {
      return 2;
    } else if (value === 9) {
      return 3;
    } else if (value === 16) {
      return 4;
    } else {
      throw new Error('Invalid input');
    }
  }
}
