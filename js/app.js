var barChart3d = new Chart({
  type: "barFunnel",
  data: [
    /*Education & Reflection*/ [20, 20, 20, 20, 20, 20, 20, 20],
    /*Direct Client Service*/ [80, 60, 50, 50, 30, 20, 10, 0],
    /*Service Leadership*/ [0, 20, 30, 30, 40, 30, 20, 10],
    /*Capacity Building / Social Action*/ [0, 0, 0, 0, 10, 30, 50, 50],
    /*Senior Presentation of Learning*/ [0, 0, 0, 0, 0, 0, 0, 20]
  ]
});

new Chart({
  config: {
    region: {
      display: true,
      borderColor: "#F6C85F",
      backgroundColor: "rgba(246, 200, 95, 0.2)"
    },

    elements: {
      rectangle: {
        stepLabel: {
          display: true,
          fontSize: 20
          // color: "red"
        }
      }
    }
  }
});
