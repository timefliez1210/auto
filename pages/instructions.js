import React, { Component } from "react";

import { ABI, ADDRESS } from "../utils/globals";

import Router from "next/router";
import Spinner from "../components/Spinner";
import Navigation from "../components/Navigation";
import InfoHeader from "../components/InfoHeader";
import Sidebar from "../components/sidebar/Sidebar";

// Context API
import AccountContext from "../Layout/AccountContext";

class Instructions extends Component {
  static contextType = AccountContext;

  async componentDidMount() {
    try {
      this.setState({ account: this.context.account });
      await this.loadBlockchainData();
      this.setState({ loading: false });
      console.log(this.state);
    } catch (err) {
      console.log("Something went wrong.. Check: " + err);
    }
  }

  async loadBlockchainData() {
    try {
      let contract = await tronWeb.contract(ABI, ADDRESS);
      this.setState({ contract });
      const address = ADDRESS;
      this.setState({ address });

      const userId = await this.state.contract.methods
        .users(this.state.account)
        .call();

      this.setState({
        userIds: parseInt(userId.id),
        parnterCount: parseInt(userId.partnersCount),
      });
      const userCount = await this.state.contract.methods.lastUserId().call();
      this.setState({ totalUsers: parseInt(userCount) });
      const balance = await parseInt(
        this.state.contract.methods.balances(this.state.account).call()
      );
      this.setState({ balance });

      // Matrix Calls
      const costs = await contract.methods.levelPrice(1).call();
      this.setState({ cost: parseInt(costs) / 1000000 });

      // Error Catch -> Fetch the new Data directly from web3 provider after reload
    } catch (err) {
      try {
        let contract = await tronWeb.contract(ABI, ADDRESS);
        const accounts = await tronWeb.defaultAddress.base58;
        this.setState({ account: accounts });
        const address = ADDRESS;
        this.setState({ address });
        const isExists = await contract.methods
          .isUserExists(this.state.account)
          .call();
        this.setState({ isExist: isExists });
        // Bundled Promises
        const userId = await this.state.contract.methods
          .users(this.state.account)
          .call();
        this.setState({
          userIds: parseInt(userId.id),
          parnterCount: parseInt(userId.partnersCount),
        });
        const userCount = await this.state.contract.methods.lastUserId().call();
        this.setState({ totalUsers: parseInt(userCount) });
        const _balance = await this.state.contract.methods
          .balances(this.state.account)
          .call();
        const balance = parseInt(_balance);
        this.setState({ balance });
      } catch (err) {
        window.alert(
          "We really cant connect you, are you connected to the Tron Chain and Loggen in?  "
        );
      }
    }
  }

  constructor(props) {
    super(props);
    this.state = {
      account: "",
      isExist: true,
      userIds: "",
      loading: true,
      totalUsers: "",
      parnterCount: "",
    };
  }
  render() {
    if (this.state.loading === true) {
      return <Spinner />;
    } else {
      if (this.state.isExist === true) {
        return (
          <>
            <Navigation />
            <div className="dashboard">
              <div className="pagination">
                <div className="small-box">
                  <Sidebar
                    userIds={this.state.userIds}
                    partnersCount={this.state.parnterCount}
                    account={this.state.account}
                    address={this.state.address}
                    balance={this.state.balance}
                  />
                </div>
                <div className="big-box">
                  <h1>WHAT IS AUTOXIFY</h1>
                  <p>
                    Autoxify is is a 100% new type of smart contract never seen
                    before. Autoxify has a 100% Unique Code and a completely New
                    concept in crowd funding programs worldwide. This logic in
                    Autoxify has not been used before anywhere. To solve the
                    issues users of the previous smart contract users encounter
                    the Autoxify team introduced what is called the Referral
                    Activator.
                    <br />
                    <br />
                    With the referral activator, Autoxify smart contract
                    platform becomes the most progressive crowd funding program
                    ever, as the new algorithm and logic makes it possible so
                    members do not get stuck at all at standstill, this means
                    that most members of Autoxify will earn from after 3 days,
                    thanks to the 300% more users backup logic coded inside the
                    smart contract.
                  </p>
                  <h2>SLOTS</h2>
                  <p>
                    In Autoxify programs, Autoxify x4 and x3 have 20 slots. All
                    similar and work in the same way.
                    <br />
                    Each subsequent slot is 2 times more expensive than the
                    previous one. Both income and profits from them are twice as
                    high! How many slots can be activated immediately? In the x4
                    as much as you want! At least all twenty at once! On the x3
                    you cannot activate the slots as the x3 program runs on auto
                    mode, from slot 1 to slot 20. There is nothing you can do
                    here.
                    <br />
                    They have no expiration date, so you can not be afraid that
                    they will burn. All active slots move and bring you revenue
                    in parallel.
                  </p>
                  <h2>REGISTRATION</h2>
                  <p>
                    400TRX is divided into five of 80 each. The first slot of x3
                    and x4 costs 80TRX. Rest 240TRX made of 80TRX in three
                    places is sent to the Referral Activator contract. After
                    three days the smart contract will activate three x3 entries
                    for you. This will push your first entered X3 ID further UP
                    so you earn faster. In total you get four x3 entries, and
                    one x4 entry. The X3 runs in auto mode.
                  </p>
                  <p>
                    The first slot of each program costs 80TRX. They are bought
                    together; separately, the first slot cannot be taken.
                    Accordingly, the start to the matrix is generally 400 TRX.
                    You can purchase all further slots separately (only in x4)
                    in order from the smaller to the larger. It is impossible to
                    buy a third slot without having a second open (in x4 only).
                    So also in x3 the auto upgrades are step by step.
                  </p>
                  <h2>AUTOXIFY X3</h2>
                  <p>
                    The x3 program in Autoxify is a global matrix and the first
                    of it kind in the history of smart contracts. AUTOXIFY X3 is
                    the main deal on the Dapp. Since members will be getting
                    four x3 entry positions, the referral activator hold the
                    rest three and activates them after three days. This logic
                    will in action "push up all members" further up into higher
                    slots where the the commission are much bigger. Because of
                    this new coded logic, all Autoxify members will earn.
                    <br />
                    <br />
                    Automatic upgrade on the x3 matrix so you do not lose profit
                    or miss out on earnings to upcoming downlines. All of your
                    four x3 entries get auto upgraded to next higher slots
                    without any intervention from you, it runs on it own.
                    <br />
                    <br />
                    The X3 matrix is a POWERFUL logic completely UNIQUE
                    operating with both Auto Referral Activator and Auto
                    Upgrades. Due to this you need not worry about missing your
                    earnings, as your slots are paid for you on the fly, using
                    you first cycle only! Welcome to the world of automated
                    profits.
                  </p>
                  <h2>AUTOXIFY X4</h2>
                  <p>
                    AUTOXIFY X4 offers a matrix system for team build where all
                    who belong to teams grow together with collective efforts.
                    No one can work alone here as the Autoxify x4 team matrix
                    gives success with team work. On the x4 team members follows
                    the superior partner, so overflows and team spillover is
                    achieved only if all work as a team from above and below
                    team members. Team work benefits all members if team members
                    invite at least one person into the Autoxify Smart Contract
                    program.
                    <br />
                    <br />
                    We are building a team together. There may be at least all
                    of you invited, at least not one invited by you, or mixed.
                    <br />
                    1 &gt; 2 &gt; Partners who takes two places below you in the
                    first line are two places in the second line of the higher.
                    A 100% payment goes to the wallet of your higher partner.
                    <br />
                    <br />
                    3 &gt; 4 &gt; 5 &gt; You also receive income from the second
                    line, 100% from four people. Of these, 3 payments go
                    instantly to your wallet.
                    <br />
                    <br />6 &gt; The last payout is the closing slot, and it
                    also makes a reinvest, buying you the same slot again, and
                    the payment of 100% is transferred to your higher partner.
                  </p>
                  <h2>REINVEST</h2>
                  <p>
                    REINVEST – this is the re-opening (purchase) of the slot at
                    the current level. Reinvest takes place automatically.
                    Reinvest opens the same slot for you again, and you continue
                    to receive income from it. Without reinvestment, this slot
                    would close, and that’s it.
                    <br />
                    Re-entry or Reinvest sale goes to your inviter on x3 and to
                    your superior upline on x4. This action reopens same matrix
                    slot for you. This way you keep on earning unlimited times
                    with AUTOXIFY Smart Contract.
                    <br />
                    <br />
                    Similarly, your referral partners will have reinvestments,
                    and you will instantly receive income every time.
                  </p>
                  <h2>UPGRADE</h2>
                  <p>
                    Autoxify X3 - Here the upgrades are automatic so you do
                    nothing. The smart contract will carry out all your slot to
                    slot upgrades on its own without your intervention.
                    <br />
                    Auto Upgrades on X3 - ONLY the first cycle payment from your
                    first two partner from each slot is used for auto upgrades.
                    Rest payment coming goes to you after upgrades.
                    <br />
                    <br />
                    Autoxify X4 - You must upgrade to next slot one by one. From
                    slot 1, to slot 2, next slot 3, and so on and on to slot 20
                    for maximum gain and profits. To buy sequential way.
                    <br />
                    <br />
                    You must have paid for each slot level before you can earn
                    from it. If you do not upgrade when due and your downline
                    partner get to the same slot with you, you miss out on
                    earnings for not upgrading, as the payment will then go to
                    your upline partner making him/her earn double. partner.
                    <br />
                    <br />
                    You are recommended to upgrade to higher SLOTS/LEVELS so not
                    to miss commissions, and even more - EARN BIGGER!!!
                  </p>
                  <h2>OVERFLOWS, OVERTAKING AND RETURNS ONLY ON X4</h2>
                  <p>
                    You can overtake your superior partner by opening slots
                    which he has not yet reached.
                    <br />
                    In this case, you get up to his superior partner, the
                    closest who has such level of the slot, and the income goes
                    to him.
                    <br />
                    <br />
                    If he doesn’t have this slot available, then in the same way
                    you are already overtaking two superiors until the system
                    finds a partner who already has active slot of this level.
                    Referral link returns the partners. This means that when
                    your superior buys this slot, then the next reinvest, you
                    will again take a place under him.
                  </p>
                  <h2>REFERRAL ACTIVATOR</h2>
                  <p>
                    Referral Activator is the new concept introduced by the
                    Autoxify team that holds and activate additional 3 entry
                    positions for you on the fly. This is done 3 days after
                    registration. So even after a year and you register know
                    that there is BACKUP referral waiting for you that will all
                    go under you, making you upgrade faster. This is the 300%
                    more users you keep hearing.
                    <br />
                    <br />
                    This works 100% without fail because it's coded inside the
                    smart contract. This means that there are 300% more users
                    waiting every day into infinite.
                    <br />
                    <br />
                    It automatically put you under a global upline immediately
                    after registration.
                    <br />
                    <br />
                    It holds your three x3 entry positions till after three
                    days.
                    <br />
                    <br />
                    It auto gives every user three additional entry positions
                    into the x3 matrix. This new entries are complete entries
                    from which you earn from level 1 – level 20. 3 times. Plus
                    the first one, making total four
                  </p>
                  <h2>AUTO REFERRAL</h2>
                  <p>
                    It gives all members downlines. This is how the global X3
                    work so you get partners/referrals in your personal
                    slots/levels even without you directly referring or
                    personally inviting them.
                    <br />
                    This is the default mode on the x3 which means that even
                    before the referral activator start giving members the
                    backed up 3, the auto referral logic would had allocated
                    downline partners to most of the members. <br />
                    <br />
                    So in essence with both auto referral and the new referral
                    activator combined Autoxify members now have a 100% chance
                    to earn within a very shart time. This has never been
                    possible before Autoxify.
                    <br />
                    <br />
                  </p>
                  <h2>REFERRAL BONUS</h2>
                  <p>
                    Get rewards for your efforts in supporting AUTOXIFY Smart
                    Contract.
                    <br />
                    You earn a bonus from each of your invite in all the 20
                    slots in the x3 program. Whenever your invite auto reentry
                    you earn the reinvest amount on the respective slots.
                    <br />
                    <br />
                    This means you earn the referral bonus in slot 1 – 80TRX,
                    slot 2 – 160TRX, slot 3 – 320TRX, slot 4 – 640TRX, all the
                    way to slot 20. Since members gets 4 positions in x3 that
                    means you earn the bonus in 80 slots!
                    <br />
                    <br />
                    Understand that you will earn without refer but with just
                    one you earn much more. Also note that you benefits too from
                    that referral person activity on Autoxify. If the person
                    happens to refer many people you benefit from him in more
                    ways you can imagine.
                  </p>
                  <h2>100% UNIQUE PROTOCOL</h2>
                  <p>
                    Autoxify has a 100% Unique Code and a completely New concept
                    in crowd funding programs worldwide. This logic in Autoxify
                    has not been used before anywhere.
                    <br />
                    It is written in the contract and provisions made so you
                    actually get 3 downlines partner after 3 days. And you
                    continue to auto upgrade from slot 1 to slot 20. No other
                    platform offers such powerful system. to him.
                    <br />
                    <br />
                    Autoxify is the first ever that has a referral activator for
                    those members that are weak in inviting. Referral activator
                    will activate for all registered members after 3 days. It
                    does not matter if now or next year, it activates because it
                    is coded in the smart contract which cannot be changed even
                    by the creator.
                  </p>
                  <h2>TERMS AND DEFINITIONS</h2>
                  SUPERIOR PARTNER – a person whose referral link you have
                  registered for
                  <br />
                  <br />
                  Referral partner – a partner registered with your referral
                  link
                  <br />
                  <br />
                  UPGRADE – is the opening (purchase) of the next slot of a more
                  expensive level
                  <br />
                  <br />
                  REINVEST – is an automatic re-opening (purchase) of the slot
                  of the current level
                  <br />
                  <br />
                  Lost profit – payment left to a higher partner, due to the
                  lack of an upgrade to a more expensive slot.
                  <br />
                  <br />
                  Extra profit – payment received to you at the expense of the
                  Lost profit of a lower partner. <br />
                  <br />
                  Overflow from a superior– a partner of your superior partner
                  who has closed a place in your slot. <br />
                  <br />
                  Overflow from a downstream– a partner of your downline who has
                  closed a place in your slot. <br />
                  <br />
                  Overtaking – the purchase by a lower partner of a more
                  expensive site, which you don’t have yet.{" "}
                </div>
              </div>

              <style jsx>{`
                .big-box {
                  border-radius: 50px;
                  background: #1d2026;
                  box-shadow: 11px 11px 22px #101215, -11px -11px 22px #2a2e37;
                  padding: 30px 30px;
                }
                .dashboard {
                  background: none;
                  width: 100vw;
                  max-width: 1420px;
                  margin: 3.5vh auto;
                  padding: 5px;
                }
                .pagination {
                  margin-top: 2vh;
                  display: grid;
                  grid-template-columns: 30% 65%;
                  grid-gap: 5%;
                }
                @media only screen and (max-width: 900px) {
                  .pagination {
                    grid-template-columns: 1fr;
                    grid-gap: 5%;
                  }
                }
              `}</style>
            </div>
          </>
        );
      } else {
        Router.push("/login");
      }
    }
  }
}

export default Instructions;
