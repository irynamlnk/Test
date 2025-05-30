module.exports = async function minimizedActionWithoutProject({ driverBuilder }) {
    await driverBuilder._createActionInMyActionList(ACTIONS.approvalNote);
    await driverBuilder.performActionAndCheckResult(
        MyActions.getActionByTitle(ACTIONS.approvalNote),
        ActionModal.minimizeAction
    );
