import './styles/style.scss';

function testTypeScript(x: number): void {
    console.log('typescript worked! x = ' + x)
}

const hello = () => console.log('hello world with autodeploy!');

hello();
testTypeScript(2);
