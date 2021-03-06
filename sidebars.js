module.exports = {
  someSidebar: [
    "home",
    "installation",
    "get-started",
    {
      type: "category",
      label: "Documentation",
      items: [
        {
          type: "category",
          label: "Callbacks",
          items: ["docs/callbacks/train-logger"],
        },
        {
          type: "category",
          label: "Layers",
          items: [
            {
              type: "category",
              label: "Activation Functions",
              items: [
                "docs/layers/activation_functions/gelu",
                "docs/layers/activation_functions/leaky-relu",
                "docs/layers/activation_functions/relu",
                "docs/layers/activation_functions/selu",
                "docs/layers/activation_functions/sigmoid",
                "docs/layers/activation_functions/softmax",
                "docs/layers/activation_functions/tanh",
              ],
            },
            {
              type: "category",
              label: "Linear",
              items: [
                "docs/layers/linear/dense",
                "docs/layers/linear/bilinear",
              ],
            },
            {
              type: "category",
              label: "Convolutional",
              items: [
                "docs/layers/convolutional/conv1d",
                "docs/layers/convolutional/conv2d",
                "docs/layers/convolutional/conv3d",
              ],
            },
            {
              type: "category",
              label: "Pooling",
              items: [
                "docs/layers/pooling/avgpool1d",
                "docs/layers/pooling/avgpool2d",
                "docs/layers/pooling/avgpool3d",
                "docs/layers/pooling/maxpool1d",
                "docs/layers/pooling/maxpool2d",
                "docs/layers/pooling/maxpool3d",
              ],
            },
            {
              type: "category",
              label: "Normalization",
              items: [
                "docs/layers/normalization/batchnorm1d",
                "docs/layers/normalization/batchnorm2d",
                "docs/layers/normalization/batchnorm3d",
              ],
            },
            {
              type: "category",
              label: "Recurrent",
              items: [
                "docs/layers/recurrent/rnn",
                "docs/layers/recurrent/gru",
                "docs/layers/recurrent/lstm",
                "docs/layers/recurrent/rnncell",
                "docs/layers/recurrent/grucell",
                "docs/layers/recurrent/lstmcell",
              ],
            },
            {
              type: "category",
              label: "Regularizers",
              items: [
                "docs/layers/regularizers/alpha-dropout",
                "docs/layers/regularizers/dropout",
                "docs/layers/regularizers/dropout2d",
                "docs/layers/regularizers/dropout3d",
              ],
            },
            {
              type: "category",
              label: "Sparse",
              items: ["docs/layers/sparse/embedding"],
            },
            {
              type: "category",
              label: "Other",
              items: ["docs/layers/other/flatten"],
            },
          ],
        },
        {
          type: "category",
          label: "Loss Functions",
          items: [
            "docs/loss_functions/bce-loss",
            "docs/loss_functions/cross-entropy-loss",
            "docs/loss_functions/mse-loss",
          ],
        },
        {
          type: "category",
          label: "Models",
          items: ["docs/models/model", "docs/models/sequential"],
        },
        {
          type: "category",
          label: "Optimizers",
          items: [
            "docs/optimizers/adagrad-optimizer",
            "docs/optimizers/adam-optimizer",
            "docs/optimizers/rmsprop-optimizer",
            "docs/optimizers/rprop-optimizer",
            "docs/optimizers/sgd-optimizer",
          ],
        },
        {
          type: "category",
          label: "Utils",
          items: ["docs/utils/custom-layer"],
        },
      ],
    },
    "support",
  ],
};
