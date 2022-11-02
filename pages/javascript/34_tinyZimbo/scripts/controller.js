"use strict";

import { john } from "./model.js";
import {
  generateCardIncomes,
  generateCardExpenses,
  displayBalance,
} from "./view.js";

generateCardIncomes(john);
generateCardExpenses(john);
displayBalance(john);
