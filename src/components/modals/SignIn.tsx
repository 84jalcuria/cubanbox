import Modal from '@/components/modals/Modal';
import ButtonSignIn from '@/components/modals/ButtonSignIn';

interface signInProps {
  show: boolean;
  onClose: () => void;
}

const SignIn = ({ show, onClose }: signInProps) => {
  return (
    <Modal show={show}>
      <div
        className='bg-[#262C34] w-[90%] h-[80%] sm:w-[60%]  md:w-[60%] lg:w-[40%] rounded-2xl
    flex flex-col justify-between items-center shadow-2xl'
      >
        <button
          onClick={onClose}
          className='focus:outline-none self-end mt-4 mr-4'
        >
          <svg
            className='max-h-7 w-7 text-[#E76C4A]'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={3}
              d='M6 18L18 6M6 6l12 12'
            />
          </svg>
        </button>
        <section>Section</section>
        <div className='mb-12'>
          <ButtonSignIn onClose={onClose} />
        </div>
      </div>
    </Modal>
  );
};

export default SignIn;
