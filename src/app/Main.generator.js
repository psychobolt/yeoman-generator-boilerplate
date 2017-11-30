import Generator from 'yeoman-generator';

export default class Main extends Generator {
  filepath = 'public/index.html';

  prompting() {
    return this.prompt([{
      type: 'input',
      name: 'filepath',
      message: 'Enter a filepath: ',
      default: this.filepath,
    }]).then(values => {
      this.filepath = values.filepath;
    });
  }

  writing() {
    this.fs.copyTpl(
      this.templatePath('index.html'),
      this.destinationPath(this.filepath),
      { title: 'Templating with Yeoman' },
    );
  }
}
