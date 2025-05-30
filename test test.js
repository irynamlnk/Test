module.exports = async function minimizedActionWithoutProject({ driverBuilder }) {
    await driverBuilder._createActionInMyActionList(ACTIONS.approvalNote);
    await driverBuilder.performActionAndCheckResult(
        MyActions.getActionByTitle(ACTIONS.approvalNote),
        ActionModal.minimizeAction
    );
    await driverBuilder.performActionAndCheckResult(
        ActionModal.minimizeAction,
        MyActions.minimizedActionByTitle(ACTIONS.approvalNote)
    );
    await driverBuilder.performActionAndCheckResult(
        LeftPanel.projectsNavigator,
        ProjectNavigator.getProjectByName(PROJECTS.status.name),
        { waitLocatedRetries: 2 }
    );
