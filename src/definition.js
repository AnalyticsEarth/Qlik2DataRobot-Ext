let about = {
  type: "items",
  label: "About",
  items: {
    about1: {
      type: "string",
      component: "text",
      label: "Steven Pressland, Qlik Solution Architect, 2018"
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

export default {
  type: "items",
  component: "accordion",
  items: {
    datarobot: {
      type: "items",
      label: "Qlik 2 DataRobot",
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
    settings: {
      uses: "settings"
    },
    about
  }
}
