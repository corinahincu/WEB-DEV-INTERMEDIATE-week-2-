array.reduce((acc, val) => {return acc + val}, 0)

/*

    0   1   2   3   4
  [10  20  30  40  50] array.reduce(f)
            v
            f(
              acc < 10,
              val < 20,
            ) > return 
                      v
                      acc = 30

                      ...
 */