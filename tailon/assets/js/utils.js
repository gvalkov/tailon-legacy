function formatBytes(size) {
    var units = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    var i = 0;
    while(size >= 1024) {
        size /= 1024;
        ++i;
    }
    return size.toFixed(1) + ' ' + units[i];
}

function formatFilename(state) {
    if (!state.id) return state.text;
    var size = formatBytes($(state.element).data('size'));
    return '<span>' + state.text + '</span>' + '<span style="float:right;">' + size + '</span>';
}

function endsWith(str, suffix) {
    return str.indexOf(suffix, str.length - suffix.length) !== -1;
}

var escape_entity_map = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "/": '&#x2F;'
};

// This is the escapeHtml function from mustache.js.
function escapeHtml(string) {
    return String(string).replace(/[&<>\/]/g, function (s) {
        return escape_entity_map[s];
    });
}

