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
          "We really cant connect you, are you connected to the MATIC Chain?  " +
            err
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
                    Autoxify matrix marketing‒ is a closed system, without
                    deadlines for slots, with a limited number of places and an
                    unlimited number of reinvests. In the matrix, the referral
                    link is fixed the person who invited you. You always follow
                    your superior partner, to each of the slots he activated.
                    <br />
                    <br />
                    In theAutoxify x3 programelow you is three places in one
                    line. In theAutoxify x4 programbelow you are two lines – 2
                    places in the first line and 4 places in the second. When
                    you register in Autoxify, you open both programs
                    simultaneously.
                  </p>
                  <h2>SLOTS</h2>
                  <p>
                    In this programs,Autoxify x4 have 12 slots. All similar and
                    work in the same way.
                    <br />
                    Each subsequent slot is 2 times more expensive than the
                    previous one. Both income and profits from them are twice as
                    high! How many slots can be activated immediately? As much
                    as you want! At least all twelve at once!
                    <br />
                    They have no expiration date, so you can not be afraid that
                    they will burn. All active slots move and bring you revenue
                    in parallel
                  </p>
                  <h2>REGISTRATION</h2>
                  <p>
                    The first slot of each program costs200 TRX. They are bought
                    together; separately, the first slot cannot be taken.
                    Accordingly, the start to the matrix is generally400 TRX.
                    You can purchase all further slots separately, in order from
                    the smaller to the larger. It is impossible to buy a third
                    slot without having a second open.
                  </p>
                  <h2>AUTOXIFY X3</h2>
                  <p>
                    In parallel, the Autoxify x4 program also works for you,
                    here an overflow system is organized from above and from
                    below. We are building a team together. There may be at
                    least all of you invited, at least not one invited by you,
                    or mixed. 1 &gt; 2 &gt; Partners who takes two places below
                    you in the first line are two places in the second line of
                    the higher. A 100% payment goes to the wallet of your higher
                    partner.
                    <br />
                    <br />
                    3 &gt; 4 &gt; 5 &gt; You also receive income from the second
                    line, 100% from four people. Of these, 3 payments go
                    instantly to your wallet.
                    <br />
                    <br />6 &gt; The last payout is the closing slot, and it
                    also makes a reinvest,buying you the same slot again, and
                    the payment of 100% is transferred to your higher partner.
                  </p>
                  <h2>AUTOXIFY X4</h2>
                  <p>
                    In parallel, the Autoxify x4 program also works for you,
                    here an overflow system is organized from above and from
                    below. We are building a team together. There may be at
                    least all of you invited, at least not one invited by you,
                    or mixed. 1 &gt; 2 &gt; Partners who takes two places below
                    you in the first line are two places in the second line of
                    the higher. A 100% payment goes to the wallet of your higher
                    partner.
                    <br />
                    <br />
                    3 &gt; 4 &gt; 5 &gt; You also receive income from the second
                    line, 100% from four people. Of these, 3 payments go
                    instantly to your wallet.
                    <br />
                    <br />6 &gt; The last payout is the closing slot, and it
                    also makes a reinvest,buying you the same slot again, and
                    the payment of 100% is transferred to your higher partner.
                  </p>
                  <h2>REINVEST</h2>
                  <p>
                    REINVEST – this is the re-opening (purchase) of the slot at
                    the current level.
                    <br />
                    Reinvest opens the same slot for you again, and you continue
                    to receive income from it. Without reinvestment, this slot
                    would close, and that’s it.
                    <br />
                    <br />
                    Reinvest takes place automatically, as soon as you occupy
                    the last free place, the current slot closes and goes to the
                    archive.
                    <br />
                    <br />
                    You re-occupy the free space in the slot with a higher
                    partner and a new slot with free places opens for you, and
                    100% payment goes to the wallet of your higher partner.
                    <br />
                    <br />
                    Similarly, your refferal partners will have reinvestments,
                    and you will instantly receive income every time.
                  </p>
                  <h2>UPGRADE</h2>
                  <p>
                    UPGRADE – is the opening (purchase) of the next slot of a
                    more expensive level. It is done once at the first opening
                    of the slot. The payment goes to your superior partner,
                    provided that he has a slot of this level. There is enough
                    income from each slot to reinvest the slot of the same level
                    and buy a slot of the next level.
                    <br />
                    <br />
                    You decide whether to purchase the next level slot!
                    <br />
                    <br />
                    A reinvestment of the slot occurs automatically. If the next
                    slot is not open for you, then from the second round, after
                    reinvestment, all payments will be redirected to a higher
                    partner.
                    <br />
                    <br />
                    When you buy the necessary slot, then at the next reinvest
                    your referral partner will take a place under you, and with
                    each reinvest will take a place under you again.
                  </p>
                  <h2>OVERFLOWS, OVERTAKING AND RETURNS</h2>
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
                    finds a partner who already has active slot of this lievel.
                    Referral link returns the partners. This means that when
                    your superior buys this slot, then the next reinvest, you
                    will again take a place under him.
                  </p>
                  <h2>REFERRAL ACTIVATOR</h2>
                  <p>
                    You can overtake your superior partner by opening slots
                    which he has not yet reached. In this case, you get up to
                    his superior partner, the closest who has such level of the
                    slot, and the income goes to him.
                    <br />
                    <br />
                    If he doesn’t have this slot available, then in the same way
                    you are already overtaking two superiors until the system
                    finds a partner who already has active slot of this lievel.
                    <br />
                    <br />
                    Referral link returns the partners. This means that when
                    your superior buys this slot, then the next reinvest, you
                    will again take a place under him.
                  </p>
                  <h2>AUTO REFERRAL</h2>
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
                    finds a partner who already has active slot of this lievel.
                    <br />
                    <br />
                    Referral link returns the partners. This means that when
                    your superior buys this slot, then the next reinvest, you
                    will again take a place under him.
                  </p>
                  <h2>GLOBAL SPILL</h2>
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
                    finds a partner who already has active slot of this lievel.
                    <br />
                    <br />
                    Referral link returns the partners. This means that when
                    your superior buys this slot, then the next reinvest, you
                    will again take a place under him.
                  </p>
                  <h2>REFERRAL BONUS</h2>
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
                    finds a partner who already has active slot of this lievel.
                    <br />
                    <br />
                    Referral link returns the partners. This means that when
                    your superior buys this slot, then the next reinvest, you
                    will again take a place under him.
                  </p>
                  <h2>300% UNIQUE PROTOCOL</h2>
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
                    finds a partner who already has active slot of this lievel.
                    <br />
                    <br />
                    Referral link returns the partners. This means that when
                    your superior buys this slot, then the next reinvest, you
                    will again take a place under him.
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
                  expensive site, which you don’t have yet.
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
