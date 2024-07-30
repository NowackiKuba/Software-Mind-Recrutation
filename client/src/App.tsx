import './App.css';
import CreateUserForm from './components/forms/CreateUserForm';

function App() {
  return (
    <div className='flex items-center justify-start w-full h-screen gap-8 bg-background'>
      <div className='w-[75%] h-full'></div>
      <div className='w-[25%] bg-white pt-12 px-8 flex flex-col items-center justify-start gap-8 h-full border-l'>
        <p className='text-xl font-semibold'>Stwórz Konto Użytkownika</p>

        <CreateUserForm />
      </div>
    </div>
  );
}

export default App;
