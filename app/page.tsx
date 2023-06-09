import {
  BoltIcon,
  ExclamationTriangleIcon,
  SunIcon,
} from "@heroicons/react/24/outline";

function HomePage() {
  return (
    <div
      className="flex flex-col items-center justify-center 
    h-screen px-2 text-white"
    >
      <h1 className="text-5xl font-bold mb-20">ronenGPT</h1>

      <div className="flex space-x-2 text-center">
        <div>
          <div className="flex flex-col items-center justify-center mb-5">
            <SunIcon className="h-8 w-8" />
            <h2>Examples</h2>
          </div>

          <div className="space-y-2">
            <p className="infoText">Have we landed on the moon?</p>
            <p className="infoText">
              What is the difference between a wolf and a dog?
            </p>
            <p className="infoText">What is the color of the sky?</p>
          </div>
        </div>
        <div>
          <div className="flex flex-col items-center justify-center mb-5">
            <BoltIcon className="h-8 w-8" />
            <h2>Capabilities</h2>
          </div>

          <div className="space-y-2">
            <p className="infoText">Change the ronenGPT Model to use</p>
            <p className="infoText">
              Messeges are stored in Firebase&rdquos Firestore
            </p>
            <p className="infoText">
              Hot Toast notifications when ronenGPT is thinking!
            </p>
          </div>
        </div>
        <div>
          <div className="flex flex-col items-center justify-center mb-5">
            <ExclamationTriangleIcon className="h-8 w-8" />
            <h2>Limitations</h2>
          </div>

          <div className="space-y-2">
            <p className="infoText">
              May occasionally generate incorrect information
            </p>
            <p className="infoText">
              This project was built by Ronen Fromchuk for educational purposes!
            </p>
            <p className="infoText">
              May not response due error from the OPENAI backend
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
