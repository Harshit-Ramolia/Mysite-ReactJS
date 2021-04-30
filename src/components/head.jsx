// This will return the Head column of the table using same table structure for roles and inside roles so printing based on what props are given

function App({headNames}) {
  return (
    <div class="column head">
      <div class="radio"></div>
      <div class="department">{headNames[1]}</div>
      <div class="access">{headNames[2]}</div>
      <div class="members">{headNames[3]}</div>
      <div class="update">{headNames[4]}</div>
      <div class="view"></div>
    </div>
  );
}

export default App;
