const Ziggy = {"url":"http:\/\/test.loc","port":null,"defaults":{},"routes":{"sanctum.csrf-cookie":{"uri":"sanctum\/csrf-cookie","methods":["GET","HEAD"]},"ignition.healthCheck":{"uri":"_ignition\/health-check","methods":["GET","HEAD"]},"ignition.executeSolution":{"uri":"_ignition\/execute-solution","methods":["POST"]},"ignition.updateConfig":{"uri":"_ignition\/update-config","methods":["POST"]},"home":{"uri":"api","methods":["GET","HEAD"]},"filter":{"uri":"api\/filter","methods":["GET","HEAD"]},"projects":{"uri":"api\/projects","methods":["GET","HEAD"]},"reorder":{"uri":"api\/reorder","methods":["POST"]},"login":{"uri":"api\/auth\/login","methods":["POST"]},"user":{"uri":"api\/auth\/user","methods":["GET","HEAD"]},"admin.tasks":{"uri":"api\/admin\/tasks","methods":["GET","HEAD"]},"admin.get.task":{"uri":"api\/admin\/task\/get","methods":["GET","HEAD"]},"admin.update.task":{"uri":"api\/admin\/task\/update","methods":["POST"]},"admin.save.task":{"uri":"api\/admin\/post\/save","methods":["POST"]},"admin.delete.task":{"uri":"api\/admin\/post\/delete","methods":["GET","HEAD"]}}};

if (typeof window !== 'undefined' && typeof window.Ziggy !== 'undefined') {
    Object.assign(Ziggy.routes, window.Ziggy.routes);
}

export { Ziggy };
