import Generator from 'yeoman-generator';

export default class Main extends Generator {
  async prompting() {
    this.answers = await this.prompt([{
      type: 'input',
      name: 'filepath',
      message: 'Enter a filepath: ',
      default: 'public/index.html',
    }]);
  }

  writing() {
    this.fs.copyTpl(
      this.templatePath('index.html'),
      this.destinationPath(this.answers.filepath),
      { title: 'Templating with Yeoman' },
    );
  }
}
