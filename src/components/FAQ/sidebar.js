export default function Sidebar() {
  return (
    <div className="bg-white pa4">
      <div className="flex w-100">
        <div className="w-25">
          <i className="fas fa-user-circle f1"></i>
        </div>
        <div className="w-75 f4">Create your free OpenLearn profile</div>
      </div>
      <p>
        Anyone can learn for free on OpenLearn, but signing-up will give you
        access to your personal learning profile and record of achievements that
        you earn while you study.
      </p>
      <div className="tc">
        <button className="br-pill ph4 pv2 pointer grow bn">
          SignUp for free
        </button>
      </div>
    </div>
  );
}
