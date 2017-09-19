import { CapitalCasePipe } from './capital-case.pipe';

describe('Capital case pipe tests', () => {
  const cut: CapitalCasePipe = new CapitalCasePipe();

  it('Transform to capital case string - valid capital case string argument - success result', () => {
    // Arrange
    const cutArgument: string = 'Lala';
    const cutExpectedResult: string = 'Lala';

    // Act
    const cutResult: string = cut.transform(cutArgument);

    // Assert
    expect(cutResult).toBe(cutExpectedResult);
  });

  it('Transform to capital case string - valid lower case string argument - success result', () => {
    // Arrange
    const cutArgument: string = 'lala';
    const cutExpectedResult: string = 'Lala';

    // Act
    const cutResult: string = cut.transform(cutArgument);

    // Assert
    expect(cutResult).toBe(cutExpectedResult);
  });

  it('Transform to capital case string - valid mixed case string argument - success result', () => {
    // Arrange
    const cutArgument: string = 'laLa';
    const cutExpectedResult: string = 'Lala';

    // Act
    const cutResult: string = cut.transform(cutArgument);

    // Assert
    expect(cutResult).toBe(cutExpectedResult);
  });

  it('Transform to capital case string - valid upper case string argument - success result', () => {
    // Arrange
    const cutArgument: string = 'LALA';
    const cutExpectedResult: string = 'Lala';

    // Act
    const cutResult: string = cut.transform(cutArgument);

    // Assert
    expect(cutResult).toBe(cutExpectedResult);
  });

  it('Transform to capital case string - undefined argument - success result', () => {
    // Arrange
    const cutArgument: string = undefined;
    const cutExpectedResult: string = '';

    // Act
    const cutResult: string = cut.transform(cutArgument);

    // Assert
    expect(cutResult).toBe(cutExpectedResult);
  });
});
