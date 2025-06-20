// support/CreateFolderFunctions/CreateFolderFunctions.js
// Utility functions for folder creation and management

const { expect, default: test } = require('@playwright/test');
const fs = require('fs');
const path = require('path');
exports.CreateFolderFunctions = class CreateFolderFunctions{
constructor(page)
    {
        this.page=page;
    }


  /**
   * Create a folder if it does not exist
   * @param {string} folderPath - Absolute or relative path to the folder
   */
  static createFolder(folderPath) {
    if (!fs.existsSync(folderPath)) {
      fs.mkdirSync(folderPath, { recursive: true });
      return true;
    }
    return false;
  }

  /**
   * Check if a folder exists
   * @param {string} folderPath
   * @returns {boolean}
   */
  static folderExists(folderPath) {
    return fs.existsSync(folderPath) && fs.lstatSync(folderPath).isDirectory();
  }
}

module.exports = { CreateFolderFunctions };
