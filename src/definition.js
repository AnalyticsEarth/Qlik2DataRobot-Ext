export default {
  type: "items",
  component: "accordion",
  items: {
    datarobot: {
      type: "items",
      label: "DataRobot",
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
    }
  }
}
