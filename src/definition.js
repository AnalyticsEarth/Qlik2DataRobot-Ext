let about = {
  type: "items",
  label: "About",
  items: {
    about1: {
      type: "string",
      component: "text",
      label: "Steven Pressland, Qlik Principal Solution Architect, 2019"
    },
    about1a: {
      type: "string",
      component: "text",
      label: "Version: " + VERSION
    },
    about2: {
      type: "string",
      component: "text",
      label: "GitHub: www.github.com/analyticsearth"
    },
    about3: {
      type: "string",
      component: "text",
      label: "Qlik2DataRobot is a client extension to send data directly from your Qlik Sense application to DataRobot."
    },
    about4: {
      type: "string",
      component: "text",
      label: "The accompanying Qlik2DataRobot analytic connector is required to be setup and configured on your Qlik Sense environment."
    },
    about5: {
      type: "string",
      component: "text",
      label: "See documentation for details."
    }
  }
};

let panel = {
  type: "items",
  component: "accordion",
  items: {
    mode:{
      type:"items",
      label:"Extension Mode",
      items:{
        modeselector:{
          type:"string",
          ref:"props.mode",
          label:"Mode",
          defaultValue:"choose",
          component: "dropdown",
          options: [{
            value: "choose",
            label: "Select a Mode"
          }, {
            value: "upload",
            label: "Upload"
          }, {
            value: "explain",
            label: "Prediction Explaination"
          }],
        }
      }
    },
    data:{
      uses: "data",
      items: {
        dimensions: {
          min: 0,
          max: 1,
          disabledRef: "",
          description: (a, b) => {
            return "Prediction Key";
          }
        },
        measures:{
          min:0,
          max:1,
          disabledRef:"",
          description: (a, b) => {
            return "Prediction Explanation Measure";
          }
        }
      }
    },
    datarobot: {
      type: "items",
      label: "Qlik 2 DataRobot",
      show: (a) => {
        //console.log(a);
        return (a.props.mode == 'upload');
      },
      items:{
        apiendpoint:{
          type: "string",
          ref:"props.endpoint",
          label:"API Endpoint",
          defaultValue:"https://app.datarobot.com"
        },
        webendpoint:{
          type: "string",
          ref:"props.webendpoint",
          label:"Web Endpoint",
          defaultValue:"https://app.datarobot.com"
        },
        apitoken:{
          type: "string",
          ref:"props.apitoken",
          label:"API Token",
        },
        ssename:{
          type: "string",
          ref:"props.ssename",
          label:"Analytic Connector",
          defaultValue:"DataRobot"
        }
      }
    },
    addons: {
  type: "items",
  component: "expandable-items",
  translation: "properties.addons",
  items: {
    dataHandling: {
      uses: "dataHandling",
      items: {
        suppressZero: null,
        calcCond: {
          uses: "calcCond"
        }
      }
    }
  }
},
    settings: {
      uses: "settings"
    },
    about
  }
}

let panelFunc = (datamode) => {
  console.log("Update Panel");
  let functemp = panel;
  functemp.items.data.show = datamode;
  return functemp;
}

export default panelFunc;
