import { element, by, ElementFinder } from 'protractor';

export class ApplicationUserComponentsPage {
  createButton = element(by.id('jh-create-entity'));
  deleteButtons = element.all(by.css('jhi-application-user div table .btn-danger'));
  title = element.all(by.css('jhi-application-user div h2#page-heading span')).first();
  noResult = element(by.id('no-result'));
  entities = element(by.id('entities'));

  async clickOnCreateButton(): Promise<void> {
    await this.createButton.click();
  }

  async clickOnLastDeleteButton(): Promise<void> {
    await this.deleteButtons.last().click();
  }

  async countDeleteButtons(): Promise<number> {
    return this.deleteButtons.count();
  }

  async getTitle(): Promise<string> {
    return this.title.getText();
  }
}

export class ApplicationUserUpdatePage {
  pageTitle = element(by.id('jhi-application-user-heading'));
  saveButton = element(by.id('save-entity'));
  cancelButton = element(by.id('cancel-save'));

  additionalFieldInput = element(by.id('field_additionalField'));

  internalUserSelect = element(by.id('field_internalUser'));

  async getPageTitle(): Promise<string> {
    return this.pageTitle.getText();
  }

  async setAdditionalFieldInput(additionalField: string): Promise<void> {
    await this.additionalFieldInput.sendKeys(additionalField);
  }

  async getAdditionalFieldInput(): Promise<string> {
    return await this.additionalFieldInput.getAttribute('value');
  }

  async internalUserSelectLastOption(): Promise<void> {
    await this.internalUserSelect.all(by.tagName('option')).last().click();
  }

  async internalUserSelectOption(option: string): Promise<void> {
    await this.internalUserSelect.sendKeys(option);
  }

  getInternalUserSelect(): ElementFinder {
    return this.internalUserSelect;
  }

  async getInternalUserSelectedOption(): Promise<string> {
    return await this.internalUserSelect.element(by.css('option:checked')).getText();
  }

  async save(): Promise<void> {
    await this.saveButton.click();
  }

  async cancel(): Promise<void> {
    await this.cancelButton.click();
  }

  getSaveButton(): ElementFinder {
    return this.saveButton;
  }
}

export class ApplicationUserDeleteDialog {
  private dialogTitle = element(by.id('jhi-delete-applicationUser-heading'));
  private confirmButton = element(by.id('jhi-confirm-delete-applicationUser'));

  async getDialogTitle(): Promise<string> {
    return this.dialogTitle.getText();
  }

  async clickOnConfirmButton(): Promise<void> {
    await this.confirmButton.click();
  }
}