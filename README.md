## SimpleROC

### Installation

```bash
npm install simple_roc
```

### Require

```bash
const SimpleROC = require(`simple_roc`);
```

### Usage

#### API

-   const [fpr, tpr, area] = SimpleROC.simpleROC(predicts, labels, size);
-   const [fpr, tpr, area] = SimpleROC.simpleROC_reverse(predicts, labels, size);

#### Input

-   predicts:
-   labels:
-   size:

#### Output

-   fpr:
-   tpr:
-   size:

```bash
const [fpr, tpr, area] = SimpleROC.simpleROC([23, 22, 21, 20, 19, 18, 17, 16, 15, 14], [1, 1, 1, 1, 1, 0, 0, 0, 1, 0], 10);
```

```bash
const [fpr, tpr, area] = SimpleROC.simpleROC_reverse([23, 22, 21, 20, 19, 18, 17, 16, 15, 14], [0, 1, 0, 0, 0, 1, 1, 1, 1, 1], 10);
```

### Performance

```
[
    [0, 0, 0.16666666666666663, 0.16666666666666663, 0.16666666666666663, 0.16666666666666663, 0.33333333333333337, 0.5, 0.6666666666666667, 1],    // fpr
    [0, 0.25, 0.25, 0.5, 0.75, 1, 1, 1, 1, 1],      // tpr
    [0.875]     // area
];
```

### Graph

-
