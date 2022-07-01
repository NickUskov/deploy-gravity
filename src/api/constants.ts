const BASE_URL = 'http://80.87.199.109:8080/';

const endpoints = {
    login: `${BASE_URL}token`,
    logout: `${BASE_URL}logout`,
    users: `${BASE_URL}get_users`,
    trashTypes: `${BASE_URL}get_trash_types`,
    trashCategories: `${BASE_URL}get_trash_cats`,
    carriers: `${BASE_URL}get_carriers`,
    polygons: `${BASE_URL}get_polygons`,
    cars: `${BASE_URL}get_auto`,
    history: `${BASE_URL}get_history`,
    addComent: `${BASE_URL}add_record_note`,
    editRecord: `${BASE_URL}change_opened_record`,
    events: `${BASE_URL}stream/events`,
    testEvents: `${BASE_URL}get_test_event`,
    openInternalGate: `${BASE_URL}open_internal_gate`,
    closeInternalGate: `${BASE_URL}close_internal_gate`,
    openExternalGate: `${BASE_URL}open_external_gate`,
    closeExternalGate: `${BASE_URL}close_external_gate`,
}

export default endpoints;