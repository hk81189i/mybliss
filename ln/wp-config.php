<?php
/**
 * The base configurations of the WordPress.
 *
 * This file has the following configurations: MySQL settings, Table Prefix,
 * Secret Keys, WordPress Language, and ABSPATH. You can find more information
 * by visiting {@link http://codex.wordpress.org/Editing_wp-config.php Editing
 * wp-config.php} Codex page. You can get the MySQL settings from your web host.
 *
 * This file is used by the wp-config.php creation script during the
 * installation. You don't have to use the web site, you can just copy this file
 * to "wp-config.php" and fill in the values.
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'bliss');

/** MySQL database username */
define('DB_USER', 'root');

/** MySQL database password */
define('DB_PASSWORD', 'youtube!');

/** MySQL hostname */
define('DB_HOST', '107.170.75.61');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'HrkP2c0PxmDA,C>%dQi70pI,|k-H|t9Q(saD]E#H0Ha3_^Z:_9Oy?HBgj&T}+Nt`');
define('SECURE_AUTH_KEY',  'A1zI<m!^3AxC`5Vmi(Z1ofGOL$V)91qik=(&Xnijm}Rm):Q#1DVD2SLd{QZVw}?P');
define('LOGGED_IN_KEY',    'zn~W>387fq=3U^^}!;jIz-^CsYi!ua||ECRWmaY~J>*)L1##W{RMc?M!e37>q*Co');
define('NONCE_KEY',        '-=W7#|7sqFb!Y(X8nB~#??Rd</+.oJw-WBHWU9-|E(W|*7ujk7OK$$#(C(5pZTfb');
define('AUTH_SALT',        'TUq]P.DN;?C. Qc vUS~T>`AOP|Xc^9:|6,vmM%6%Ucj?~z?tYzC9v=xIW#;i)L+');
define('SECURE_AUTH_SALT', 'YAQ->rBK!|QT8*nqk7Yc*-7E/rfH5uQ4^^Q0<W1vs#tVvn>%(x7:ShqK,l[ATdwl');
define('LOGGED_IN_SALT',   'Ttd*|-uIOM)JOFtp6zWy_Vt{5UtJ2.;VtE7.SS^)KZt|6@o:X+VEd2b-Q7IXog.}');
define('NONCE_SALT',       'xm_`GXsCbcuz5/`!4%2c8#otKohXv_*+al+~>>G$cU,.#f}l`qNr{!R)rSszvO4`');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each a unique
 * prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * WordPress Localized Language, defaults to English.
 *
 * Change this to localize WordPress. A corresponding MO file for the chosen
 * language must be installed to wp-content/languages. For example, install
 * de_DE.mo to wp-content/languages and set WPLANG to 'de_DE' to enable German
 * language support.
 */
define('WPLANG', '');

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');


