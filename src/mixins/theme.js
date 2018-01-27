export default {
  computed: {
    shade1Text() {
      return !this.dark ? "" : "text--lighten-1"
    },
    shade2Text() {
      return !this.dark ? "text--darken-1" : "text--lighten-2"
    },
    shade3Text() {
      return !this.dark ? "text--darken-2" : "text--lighten-3"
    },
    shade4Text() {
      return !this.dark ? "text--darken-3" : "text--lighten-4"
    },
    shade5Text() {
      return !this.dark ? "text--darken-4" : "text--lighten-5"
    },
    shade1() {
      return this.dark ? "" : ""
    },
    shade2() {
      return this.dark ? "darken-1" : "lighten-1"
    },
    shade3() {
      return this.dark ? "darken-2" : "lighten-2"
    },
    shade4() {
      return this.dark ? "darken-3" : "lighten-3"
    },
    shade5() {
      return this.dark ? "darken-4" : "lighten-4"
    },
    textColorLight: function(){
      return this.themecolor+"--text text--lighten-4"
    },
    textColorDark: function(){
      return this.themecolor+"--text text--darken-4"
    },
    svgShade: function(){
      return this.dark
            ? eval('this.colorSet.'+this.camelCase+".lighten4")
            : eval('this.colorSet.'+this.camelCase+".darken4")
    },
    svgColorLight: function(){
      return eval('this.colorSet.'+this.camelCase+".lighten4")
    },
    svgColorDark: function(){
      return eval('this.colorSet.'+this.camelCase+".darken4")
    },
    camelCase: function() {
          return this._.camelCase(this.themecolor)
      }
  },
  
    }