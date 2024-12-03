import Profile from "./components/Profile/Profile";
import FriendsList from "./components/FriendsList/FriendsList";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";

import userData from "./dataJson/userData.json";
import friends from "./dataJson/friends.json";
import transactions from "./dataJson/transactions.json";

const App = () => {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendsList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
};

export default App;
