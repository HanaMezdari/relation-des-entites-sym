<?php

use Twig\Environment;
use Twig\Error\LoaderError;
use Twig\Error\RuntimeError;
use Twig\Extension\SandboxExtension;
use Twig\Markup;
use Twig\Sandbox\SecurityError;
use Twig\Sandbox\SecurityNotAllowedTagError;
use Twig\Sandbox\SecurityNotAllowedFilterError;
use Twig\Sandbox\SecurityNotAllowedFunctionError;
use Twig\Source;
use Twig\Template;

/* base.html.twig */
class __TwigTemplate_3da0ce71d5816bf02eb7ad03d0ac14246d358ef022a1fb021327401d9eb4f319 extends Template
{
    private $source;
    private $macros = [];

    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->source = $this->getSourceContext();

        $this->parent = false;

        $this->blocks = [
            'title' => [$this, 'block_title'],
            'stylesheets' => [$this, 'block_stylesheets'],
            'javascripts' => [$this, 'block_javascripts'],
            'body' => [$this, 'block_body'],
        ];
    }

    protected function doDisplay(array $context, array $blocks = [])
    {
        $macros = $this->macros;
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e = $this->extensions["Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension"];
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->enter($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "base.html.twig"));

        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02 = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->enter($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "base.html.twig"));

        // line 1
        echo "<!DOCTYPE html>
<html>
    <head>
        <meta charset=\"UTF-8\">
        <title>";
        // line 5
        $this->displayBlock('title', $context, $blocks);
        echo "</title>
       
        ";
        // line 7
        $this->displayBlock('stylesheets', $context, $blocks);
        // line 11
        echo "
        ";
        // line 12
        $this->displayBlock('javascripts', $context, $blocks);
        // line 15
        echo "    </head>
    <body>
     <header style=\" background-color: black;\">
  <div class=\"entete\" style=\" background-color: black;\" ><center><img src=\"";
        // line 18
        echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\AssetExtension']->getAssetUrl("images/logo2.jpg"), "html", null, true);
        echo "\" alt=\"image\" style=\"height: 120px;width: 100px;\"><br><h1>CINEMAHUB</h1></center></div>
            

<div class=\"carousel__container\" >
  <div class=\"carousel__item\">
    <img src=\"";
        // line 23
        echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\AssetExtension']->getAssetUrl("images/imgs3.png"), "html", null, true);
        echo "\" class=\"carousel__image\">
  </div>
  <div class=\"carousel__item\">
    <img src=\"";
        // line 26
        echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\AssetExtension']->getAssetUrl("images/imgs1.jpg"), "html", null, true);
        echo "\" class=\"carousel__image\">
    
  </div>
  <div class=\"carousel__item\">
    <img src=\"";
        // line 30
        echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\AssetExtension']->getAssetUrl("images/imgs2.jpg"), "html", null, true);
        echo "\" class=\"carousel__image\">
  </div>
</div>







            <nav class=\"navbar navbar-expand-lg navbar-light bg-dark\">
                <a class=\"navbar-brand text-white\" href=\"";
        // line 41
        echo $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("cinema");
        echo "\"><img src=\"";
        echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\AssetExtension']->getAssetUrl("images/logo2.jpg"), "html", null, true);
        echo "\" alt=\"\" style=\"height: 50px;width: 100px;\"></a>
                <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">
                  <span class=\"navbar-toggler-icon\"></span>
                </button>
              
                <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">
                  <ul class=\"navbar-nav mx-auto\">
                    <li class=\"nav-item active\">
                      <a class=\"nav-link text-white\" href=\"";
        // line 49
        echo $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("home");
        echo "\">Home </a>
                    </li>
                    <li class=\"nav-item active\">
                      <a class=\"nav-link text-white\" href=\"";
        // line 52
        echo $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("cinema");
        echo "\">Cinema </a>
                    </li>
                    <li class=\"nav-item\">
                      <a class=\"nav-link text-white\" href=\"";
        // line 55
        echo $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("film");
        echo "\">Films</a>
                    </li>
                     
                    <li class=\"nav-item\">
                        <a class=\"nav-link text-white\" href=\"#\">Actualités</a>
                      </li>
                      <li class=\"nav-item\">
                        <a class=\"nav-link text-white\" href=\"#\">Contact</a>
                      </li>
                   
                   
                  </ul>

                </ul>

                <ul class=\"navbar-nav d-flex justify-content-end\">

                  ";
        // line 72
        if (twig_get_attribute($this->env, $this->source, (isset($context["app"]) || array_key_exists("app", $context) ? $context["app"] : (function () { throw new RuntimeError('Variable "app" does not exist.', 72, $this->source); })()), "user", [], "any", false, false, false, 72)) {
            // line 73
            echo "
                   <li class=\"nav-item \">
                    <a class=\"nav-link \" >";
            // line 75
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, (isset($context["app"]) || array_key_exists("app", $context) ? $context["app"] : (function () { throw new RuntimeError('Variable "app" does not exist.', 75, $this->source); })()), "user", [], "any", false, false, false, 75), "nom", [], "any", false, false, false, 75), "html", null, true);
            echo " ";
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, (isset($context["app"]) || array_key_exists("app", $context) ? $context["app"] : (function () { throw new RuntimeError('Variable "app" does not exist.', 75, $this->source); })()), "user", [], "any", false, false, false, 75), "prenom", [], "any", false, false, false, 75), "html", null, true);
            echo "</a>
                  </li>
                  <li class=\"nav-item\">
                    <a class=\"nav-link text-white\" href=\"\">deconnexion</a>
                  </li>
                  ";
        } else {
            // line 81
            echo "
                   <li class=\"nav-item \">
                    <a class=\"nav-link text-white\" href=\"\">Inscription <span class=\"sr-only\">(current)</span></a>
                  </li>
                  <li class=\"nav-item\">
                    <a class=\"nav-link text-white\" href=\"\">Connexion</a>
                  </li>

                  ";
        }
        // line 90
        echo "
                  
                 
                </div>
              </nav>
        </header>
        ";
        // line 96
        $this->displayBlock('body', $context, $blocks);
        // line 97
        echo "    </body>
</html>
";
        
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->leave($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof);

        
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->leave($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof);

    }

    // line 5
    public function block_title($context, array $blocks = [])
    {
        $macros = $this->macros;
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e = $this->extensions["Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension"];
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->enter($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "title"));

        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02 = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->enter($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "title"));

        echo "Cinema";
        
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->leave($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof);

        
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->leave($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof);

    }

    // line 7
    public function block_stylesheets($context, array $blocks = [])
    {
        $macros = $this->macros;
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e = $this->extensions["Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension"];
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->enter($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "stylesheets"));

        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02 = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->enter($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "stylesheets"));

        // line 8
        echo "             <link rel=\"stylesheet\" href=\"";
        echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\AssetExtension']->getAssetUrl("css/style.css"), "html", null, true);
        echo "\">
         <link rel=\"stylesheet\" href=\"";
        // line 9
        echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\AssetExtension']->getAssetUrl("css/bootstrap.min.css"), "html", null, true);
        echo "\">
        ";
        
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->leave($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof);

        
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->leave($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof);

    }

    // line 12
    public function block_javascripts($context, array $blocks = [])
    {
        $macros = $this->macros;
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e = $this->extensions["Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension"];
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->enter($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "javascripts"));

        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02 = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->enter($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "javascripts"));

        // line 13
        echo "             <script src=\"";
        echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\AssetExtension']->getAssetUrl("js/bootstrap.bundle.min.js"), "html", null, true);
        echo "\"></script>
        ";
        
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->leave($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof);

        
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->leave($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof);

    }

    // line 96
    public function block_body($context, array $blocks = [])
    {
        $macros = $this->macros;
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e = $this->extensions["Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension"];
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->enter($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "body"));

        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02 = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->enter($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "body"));

        
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->leave($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof);

        
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->leave($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof);

    }

    public function getTemplateName()
    {
        return "base.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  269 => 96,  256 => 13,  246 => 12,  234 => 9,  229 => 8,  219 => 7,  200 => 5,  188 => 97,  186 => 96,  178 => 90,  167 => 81,  156 => 75,  152 => 73,  150 => 72,  130 => 55,  124 => 52,  118 => 49,  105 => 41,  91 => 30,  84 => 26,  78 => 23,  70 => 18,  65 => 15,  63 => 12,  60 => 11,  58 => 7,  53 => 5,  47 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("<!DOCTYPE html>
<html>
    <head>
        <meta charset=\"UTF-8\">
        <title>{% block title %}Cinema{% endblock %}</title>
       
        {% block stylesheets %}
             <link rel=\"stylesheet\" href=\"{{asset('css/style.css')}}\">
         <link rel=\"stylesheet\" href=\"{{asset('css/bootstrap.min.css')}}\">
        {% endblock %}

        {% block javascripts %}
             <script src=\"{{asset('js/bootstrap.bundle.min.js')}}\"></script>
        {% endblock %}
    </head>
    <body>
     <header style=\" background-color: black;\">
  <div class=\"entete\" style=\" background-color: black;\" ><center><img src=\"{{asset('images/logo2.jpg')}}\" alt=\"image\" style=\"height: 120px;width: 100px;\"><br><h1>CINEMAHUB</h1></center></div>
            

<div class=\"carousel__container\" >
  <div class=\"carousel__item\">
    <img src=\"{{asset('images/imgs3.png')}}\" class=\"carousel__image\">
  </div>
  <div class=\"carousel__item\">
    <img src=\"{{asset('images/imgs1.jpg')}}\" class=\"carousel__image\">
    
  </div>
  <div class=\"carousel__item\">
    <img src=\"{{asset('images/imgs2.jpg')}}\" class=\"carousel__image\">
  </div>
</div>







            <nav class=\"navbar navbar-expand-lg navbar-light bg-dark\">
                <a class=\"navbar-brand text-white\" href=\"{{path('cinema')}}\"><img src=\"{{asset('images/logo2.jpg')}}\" alt=\"\" style=\"height: 50px;width: 100px;\"></a>
                <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">
                  <span class=\"navbar-toggler-icon\"></span>
                </button>
              
                <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">
                  <ul class=\"navbar-nav mx-auto\">
                    <li class=\"nav-item active\">
                      <a class=\"nav-link text-white\" href=\"{{ path('home') }}\">Home </a>
                    </li>
                    <li class=\"nav-item active\">
                      <a class=\"nav-link text-white\" href=\"{{ path('cinema') }}\">Cinema </a>
                    </li>
                    <li class=\"nav-item\">
                      <a class=\"nav-link text-white\" href=\"{{ path('film') }}\">Films</a>
                    </li>
                     
                    <li class=\"nav-item\">
                        <a class=\"nav-link text-white\" href=\"#\">Actualités</a>
                      </li>
                      <li class=\"nav-item\">
                        <a class=\"nav-link text-white\" href=\"#\">Contact</a>
                      </li>
                   
                   
                  </ul>

                </ul>

                <ul class=\"navbar-nav d-flex justify-content-end\">

                  {% if app.user %}

                   <li class=\"nav-item \">
                    <a class=\"nav-link \" >{{ app.user.nom}} {{ app.user.prenom }}</a>
                  </li>
                  <li class=\"nav-item\">
                    <a class=\"nav-link text-white\" href=\"\">deconnexion</a>
                  </li>
                  {% else %}

                   <li class=\"nav-item \">
                    <a class=\"nav-link text-white\" href=\"\">Inscription <span class=\"sr-only\">(current)</span></a>
                  </li>
                  <li class=\"nav-item\">
                    <a class=\"nav-link text-white\" href=\"\">Connexion</a>
                  </li>

                  {% endif %}

                  
                 
                </div>
              </nav>
        </header>
        {% block body %}{% endblock %}
    </body>
</html>
", "base.html.twig", "/opt/lampp/htdocs/gestioncinema/templates/base.html.twig");
    }
}
