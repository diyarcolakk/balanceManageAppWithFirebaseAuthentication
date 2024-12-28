const loanModalCheck = (tcNo) => {
  const validateTCKimlik = (tc) => {
    // Regex ile temel kontrol: 11 haneli, ilk hane 0 olamaz
    if (!/^[1-9][0-9]{10}$/.test(tc)) {
      return false;
    }

    const digits = tc.split("").map(Number);

    // 10. hane kontrolü
    const oddSum = digits[0] + digits[2] + digits[4] + digits[6] + digits[8];
    const evenSum = digits[1] + digits[3] + digits[5] + digits[7];
    const tenthDigit = (7 * oddSum - evenSum) % 10;
    if (tenthDigit !== digits[9]) {
      return false;
    }

    // 11. hane kontrolü
    const totalSum = digits.slice(0, 10).reduce((sum, digit) => sum + digit, 0);
    const eleventhDigit = totalSum % 10;
    if (eleventhDigit !== digits[10]) {
      return false;
    }

    return true;
  };

  // console.log(tcNo);
  if (validateTCKimlik(tcNo)) {
    return true;
  } else {
    return false;
  }
};

export default loanModalCheck;
