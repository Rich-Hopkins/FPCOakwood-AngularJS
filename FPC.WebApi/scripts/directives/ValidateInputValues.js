(function () {
	'use strict';

	angular
		.module('app')
		.directive('valid100', function () {
			return {
				require: 'ngModel',
				link: function (scope, element, attrs, ctrl) {
					ctrl.$parsers.unshift(function (viewValue) {
						var value = parseFloat(viewValue);
						if (value === 0) {
							ctrl.$setValidity('valid100', true);
						}
						else if (value % 100 === 0) {
							ctrl.$setValidity('valid100', true);
						} else {
							ctrl.$setValidity('valid100', false);
						};
						return viewValue;
					});
				}
			};
		});

	angular
		.module('app')
		.directive('valid50', function () {
			return {
				require: 'ngModel',
				link: function (scope, element, attrs, ctrl) {
					ctrl.$parsers.unshift(function (viewValue) {
						var value = parseFloat(viewValue);
						if (value === 0) {
							ctrl.$setValidity('valid50', true);
						}
						else if (value % 50 === 0) {
							ctrl.$setValidity('valid50', true);
						} else {
							ctrl.$setValidity('valid50', false);
						};
						return viewValue;
					});
				}
			};
		});

	angular
		.module('app')
		.directive('valid20', function () {
			return {
				require: 'ngModel',
				link: function (scope, element, attrs, ctrl) {
					ctrl.$parsers.unshift(function (viewValue) {
						var value = parseFloat(viewValue);
						if (value === 0) {
							ctrl.$setValidity('valid20', true);
						}
						else if (value % 20 === 0) {
							ctrl.$setValidity('valid20', true);
						} else {
							ctrl.$setValidity('valid20', false);
						};
						return viewValue;
					});
				}
			};
		});

	angular
		.module('app')
		.directive('valid10', function () {
			return {
				require: 'ngModel',
				link: function (scope, element, attrs, ctrl) {
					ctrl.$parsers.unshift(function (viewValue) {
						var value = parseFloat(viewValue);
						if (value === 0) {
							ctrl.$setValidity('valid10', true);
						}
						else if (value % 10 === 0) {
							ctrl.$setValidity('valid10', true);
						} else {
							ctrl.$setValidity('valid10', false);
						};
						return viewValue;
					});
				}
			};
		});

	angular
		.module('app')
		.directive('valid5', function () {
			return {
				require: 'ngModel',
				link: function (scope, element, attrs, ctrl) {
					ctrl.$parsers.unshift(function (viewValue) {
						var value = parseFloat(viewValue);
						if (value === 0) {
							ctrl.$setValidity('valid5', true);
						}
						else if (value % 5 === 0) {
							ctrl.$setValidity('valid5', true);
						} else {
							ctrl.$setValidity('valid5', false);
						};
						return viewValue;
					});
				}
			};
		});

	angular
		.module('app')
		.directive('valid1', function () {
			return {
				require: 'ngModel',
				link: function (scope, element, attrs, ctrl) {
					ctrl.$parsers.unshift(function (viewValue) {
						var value = parseFloat(viewValue);
						if (value === 0) {
							ctrl.$setValidity('valid1', true);
						}
						else if (value % 1 === 0) {
							ctrl.$setValidity('valid1', true);
						} else {
							ctrl.$setValidity('valid1', false);
						};
						return viewValue;
					});
				}
			};
		});

	angular
		.module('app')
		.directive('valid050', function () {
			return {
				require: 'ngModel',
				link: function (scope, element, attrs, ctrl) {
					ctrl.$parsers.unshift(function (viewValue) {
						var value = parseFloat(viewValue);
						if (value === 0) {
							ctrl.$setValidity('valid050', true);
						}
						else if ((value * 100).toFixed(2) % 50 === 0) {
							ctrl.$setValidity('valid050', true);
						} else {
							ctrl.$setValidity('valid050', false);
						};
						return viewValue;
					});
				}
			};
		});

	angular
		.module('app')
		.directive('valid025', function () {
			return {
				require: 'ngModel',
				link: function (scope, element, attrs, ctrl) {
					ctrl.$parsers.unshift(function (viewValue) {
						var value = parseFloat(viewValue);
						if (value === 0) {
							ctrl.$setValidity('valid025', true);
						}
						else if ((value * 100).toFixed(2) % 25 === 0) {
							ctrl.$setValidity('valid025', true);
						} else {
							ctrl.$setValidity('valid025', false);
						};
						return viewValue;
					});
				}
			};
		});

	angular
		.module('app')
		.directive('valid010', function () {
			return {
				require: 'ngModel',
				link: function (scope, element, attrs, ctrl) {
					ctrl.$parsers.unshift(function (viewValue) {
						var value = parseFloat(viewValue);
						if (value === 0) {
							ctrl.$setValidity('valid010', true);
						}
						else if ((value * 100).toFixed(2) % 10 === 0) {
							ctrl.$setValidity('valid010', true);
						} else {
							ctrl.$setValidity('valid010', false);
						};
						return viewValue;
					});
				}
			};
		});

	angular
		.module('app')
		.directive('valid005', function () {
			return {
				require: 'ngModel',
				link: function (scope, element, attrs, ctrl) {
					ctrl.$parsers.unshift(function (viewValue) {
						var value = parseFloat(viewValue);
						if (value === 0) {
							ctrl.$setValidity('valid005', true);
						}
						else if ((value * 100).toFixed(2) % 5 === 0) {
							ctrl.$setValidity('valid005', true);
						} else {
							ctrl.$setValidity('valid005', false);
						};
						return viewValue;
					});
				}
			};
		});

	angular
		.module('app')
		.directive('valid001', function () {
			return {
				require: 'ngModel',
				link: function (scope, element, attrs, ctrl) {
					ctrl.$parsers.unshift(function (viewValue) {
						var value = parseFloat(viewValue);
						if (value === 0) {
							ctrl.$setValidity('valid001', true);
						}
						else if (value * 100 % 1 === 0) {
							ctrl.$setValidity('valid001', true);
						} else {
							ctrl.$setValidity('valid001', false);
						};
						return viewValue;
					});
				}
			};
		});

})();