import React from "react";
import "./App.css";
import { UserList } from "./UserList.js";
import { UserFilter } from "./UserFilter.js";
import { UserForm } from "./UserForm.js";
import { StoreProvider } from "./store/store";
import {NavBar } from "./Navigation.js"
import SplitPane from "react-split-pane";

function App() {
  return (
    <StoreProvider>
      <header>
        <NavBar />
      </header>
      <main>
        <SplitPane split="vertical" minSize={500}>
          <div>
            <UserForm />
          </div>
          <div>
            <UserFilter />
            <UserList />
          </div>
        </SplitPane>
      </main>
    </StoreProvider>
  );
}

export default App;
