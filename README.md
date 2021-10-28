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

#### Input parameter

-   predicts: Predicted value
-   labels: Binary classification arrangement
-   size: fpr, tpr return Size

#### Output parameter

-   fpr: False Positive Rate
-   tpr: True Positive Rate
-   area: ROC area (0(bad) ~ 1.0(good))

```bash
const [fpr, tpr, area] = SimpleROC.simpleROC([23, 22, 21, 20, 19, 18, 17, 16, 15, 14], [1, 1, 1, 1, 1, 0, 0, 0, 1, 0], 10);
```

```bash
const [fpr, tpr, area] = SimpleROC.simpleROC_reverse([23, 22, 21, 20, 19, 18, 17, 16, 15, 14], [0, 1, 0, 0, 0, 1, 1, 1, 1, 1], 10);
```

### Performance

```javascript
[
    [0, 0, 0.16666666666666663, 0.16666666666666663, 0.16666666666666663, 0.16666666666666663, 0.33333333333333337, 0.5, 0.6666666666666667, 1], // fpr
    [0, 0.25, 0.25, 0.5, 0.75, 1, 1, 1, 1, 1], // tpr
    [0.875], // ROC area
];
```

### Graph example

-   Python code

```python
import matplotlib.pyplot as plt

fpr = [0, 0, 0.16666666666666663, 0.16666666666666663, 0.16666666666666663, 0.16666666666666663, 0.33333333333333337, 0.5, 0.6666666666666667, 1]
tpr = [0, 0.25, 0.25, 0.5, 0.75, 1, 1, 1, 1, 1]
```

```python
plt.figure(figsize=(5, 5))
lw = 2

plt.plot(fpr, tpr, '-', color='b')

plt.plot([0, 1], [0, 1], color='navy', lw=lw, linestyle='--')

plt.xlim([0.0, 1.0])
plt.ylim([0.0, 1.05])

plt.xlabel('False Positive Rate')
plt.ylabel('True Positive Rate')

plt.show()
```

![ROC_curve](https://kihyeon-hong.github.io/Collection_of_repository_images/Simple_ROC_curve/SimpleROC_feature.jpg)
