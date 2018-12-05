var path = require('path');
var chalk = require('chalk'); // 不同颜色的info
var Generator = require('yeoman-generator');
var yosay = require('yosay'); // Yeoman弹出框

module.exports = class extends Generator {
  info() {
    this.log(chalk.green(
      'I am going to build your front application!'
    ));
  }
  prompting() {
    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the ' + chalk.green('react') + ' generator! By lewisYe'
    ));

    const prompts = [{
      name: 'projectType',
      type: 'list',
      message: 'Please choose project type:',
      choices: [{
          name: 'pure',
          value: 'pure',
          checked: true
      }, {
          name: 'complete',
          value: 'complete'
      }]
  },{
      type: 'input',
      name: 'name',
      message: 'Your project name',
      default:'react-project'
    }];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = props;
    });
  }
  writing() { // 按照自己的templates目录自定义
    let type = this.props.projectType;
    let name = this.props.name || 'react-project'
    if(type == 'pure'){
      this.fs.copy(
        this.templatePath('pure'),
        this.destinationPath(name)
      );
    }else{
      this.fs.copy(
        this.templatePath('complete'),
        this.destinationPath(name)
      );
    }
  }
  generateClient() {
    this.sourceRoot(path.join(__dirname, 'templates'));
    this.destinationPath('./');
  }
  install() { // 安装依赖
    this.installDependencies({
      npm: true,
      bower: false,
      yarn: false
    });
  }
  end() {
    this.log(yosay(
      'Your front app has been created successfully!'
    ));
  }
};