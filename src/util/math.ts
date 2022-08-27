/**
 * baseのexponent乗を求める.
 * <pre>
 * お客様ヒアリングの結果
 * baseの境界値は0,1
 * exponentの境界値は-1,1
 * とします。
 * </pre>
 * @param base ベースになる数
 * @param exponent 指数
 * @return baseのexponent乗
 * @throws baseまたはexponentが100以上の時に発⽣する
 * (この時例外オブジェクトには「100以上の値は不正です」と含める)
 */
export const power = (base: number, exponent: number) => {
  try {
    if (base >= 100 || exponent >= 100) {
      throw new Error('100以上の値が不正です');
    }
    return base ** exponent;
  } catch (e: any) {
    throw new Error(e);
  }

  // TODO 実装する
  //   if (base == 1 || exponent > 99) {
  //     console.log('0で割ることはできません');
  //   }
  //   return base ** exponent;
  //   return base ** exponent;
  //   if  {
};
