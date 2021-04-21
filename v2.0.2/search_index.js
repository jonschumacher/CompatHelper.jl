var documenterSearchIndex = {"docs":
[{"location":"acknowledgements/","page":"Acknowledgements","title":"Acknowledgements","text":"CurrentModule = CompatHelper","category":"page"},{"location":"acknowledgements/#Acknowledgements","page":"Acknowledgements","title":"Acknowledgements","text":"","category":"section"},{"location":"acknowledgements/","page":"Acknowledgements","title":"Acknowledgements","text":"CompatHelper was originally created by the Brown Center for Biomedical Informatics at Brown University.","category":"page"},{"location":"acknowledgements/","page":"Acknowledgements","title":"Acknowledgements","text":"This work was supported in part by National Institutes of Health grants U54GM115677, R01LM011963, and R25MH116440. The content is solely the responsibility of the authors and does not necessarily represent the official views of the National Institutes of Health.","category":"page"},{"location":"other-environments/","page":"Self-Hosting and Other Environments","title":"Self-Hosting and Other Environments","text":"CurrentModule = CompatHelper","category":"page"},{"location":"other-environments/#Self-Hosting-and-Other-Environments","page":"Self-Hosting and Other Environments","title":"Self-Hosting and Other Environments","text":"","category":"section"},{"location":"other-environments/","page":"Self-Hosting and Other Environments","title":"Self-Hosting and Other Environments","text":"It's possible to run CompatHelper on your infrastructure in case of GitHub Enterprise or other setups.","category":"page"},{"location":"other-environments/","page":"Self-Hosting and Other Environments","title":"Self-Hosting and Other Environments","text":"Basically it should be all configurable by passing values to CompatHelper.main() function. To run it on GitHub Enterprise, e.g. on address github.company.com you can do","category":"page"},{"location":"other-environments/","page":"Self-Hosting and Other Environments","title":"Self-Hosting and Other Environments","text":"using CompatHelper\n\nENV[\"GITHUB_TOKEN\"] = \"github access token\"\nENV[\"GITHUB_REPOSITORY\"] = \"org/repo\"\nusername = \"github user name that matches the access token\"\nemail = \"email address\"\n\nCompatHelper.main(\n    ENV,\n    CompatHelper.GitHubActions(username, email);\n    hostname_for_api = \"https://github.company.com/api/v3\",\n    hostname_for_clone = \"github.company.com\",\n)","category":"page"},{"location":"other-environments/","page":"Self-Hosting and Other Environments","title":"Self-Hosting and Other Environments","text":"To run it on TeamCity instead of GitHub Actions, you need to specify the ci_cfg parameter, e.g. like this.","category":"page"},{"location":"other-environments/","page":"Self-Hosting and Other Environments","title":"Self-Hosting and Other Environments","text":"using CompatHelper\nCompatHelper.main(\n    ENV,\n    CompatHelper.TeamCity(\"<your bot github account username>\", \"<your bot github email>\"),\n)","category":"page"},{"location":"other-environments/","page":"Self-Hosting and Other Environments","title":"Self-Hosting and Other Environments","text":"Because of high configurability of TeamCity it's advised to pass the TeamCity structure explicitly without usage of the auto_detect_ci_service function, which is suitable for some simpler setups.","category":"page"},{"location":"troubleshooting/","page":"Troubleshooting","title":"Troubleshooting","text":"CurrentModule = CompatHelper","category":"page"},{"location":"troubleshooting/#Troubleshooting","page":"Troubleshooting","title":"Troubleshooting","text":"","category":"section"},{"location":"troubleshooting/","page":"Troubleshooting","title":"Troubleshooting","text":"Here are some tips for troubleshooting CompatHelper.","category":"page"},{"location":"troubleshooting/#CompatHelper-workflow-file","page":"Troubleshooting","title":"CompatHelper workflow file","text":"","category":"section"},{"location":"troubleshooting/","page":"Troubleshooting","title":"Troubleshooting","text":"The first step is to update your CompatHelper workflow file, which is usually located  in your repository at .github/workflows/CompatHelper.yml. Make sure that this file exactly matches the contents of the file located at https://github.com/JuliaRegistries/CompatHelper.jl/blob/master/.github/workflows/CompatHelper.yml.","category":"page"},{"location":"troubleshooting/#Manifest-files","page":"Troubleshooting","title":"Manifest files","text":"","category":"section"},{"location":"troubleshooting/","page":"Troubleshooting","title":"Troubleshooting","text":"If CompatHelper is still failing, try deleting the following files (if they exist):","category":"page"},{"location":"troubleshooting/","page":"Troubleshooting","title":"Troubleshooting","text":"/Manifest.toml\n/test/Manifest.toml\n/JuliaManifest.toml\n/test/JuliaManifest.toml","category":"page"},{"location":"troubleshooting/","page":"Troubleshooting","title":"Troubleshooting","text":"If you continue to experience errors, try deleting all Manifest.toml files and JuliaManifest.toml files from your repository.","category":"page"},{"location":"options/","page":"Configuration Options","title":"Configuration Options","text":"CurrentModule = CompatHelper","category":"page"},{"location":"options/#Configuration-Options","page":"Configuration Options","title":"Configuration Options","text":"","category":"section"},{"location":"options/#Packages-in-subdirectories","page":"Configuration Options","title":"Packages in subdirectories","text":"","category":"section"},{"location":"options/","page":"Configuration Options","title":"Configuration Options","text":"By default, CompatHelper expects your git repository to contain a single package, and that the Project.toml for that package exists in the top-level directory. You can indicate that you want CompatHelper to process one or many packages that exist in subdirectories of the git repository by passing the subdirs keyword to the main function. For example:","category":"page"},{"location":"options/","page":"Configuration Options","title":"Configuration Options","text":"CompatHelper.main(; subdirs = [\"\", \"Subdir1\", \"very/deeply/nested/Subdir2\"])","category":"page"},{"location":"options/","page":"Configuration Options","title":"Configuration Options","text":"Note that the convention for specifying a top-level directory in the subdirs keyword is [\"\"]","category":"page"},{"location":"options/#Custom-registries","page":"Configuration Options","title":"Custom registries","text":"","category":"section"},{"location":"options/","page":"Configuration Options","title":"Configuration Options","text":"To use a list of custom registries instead of the General registry, use the registries keyword argument. For example:","category":"page"},{"location":"options/","page":"Configuration Options","title":"Configuration Options","text":"my_registries = [Pkg.RegistrySpec(name = \"General\",\n                                  uuid = \"23338594-aafe-5451-b93e-139f81909106\",\n                                  url = \"https://github.com/JuliaRegistries/General.git\"),\n                 Pkg.RegistrySpec(name = \"BioJuliaRegistry\",\n                                  uuid = \"ccbd2cc2-2954-11e9-1ccf-f3e7900901ca\",\n                                  url = \"https://github.com/BioJulia/BioJuliaRegistry.git\")]\n\nCompatHelper.main(; registries = my_registries)","category":"page"},{"location":"options/#Overriding-the-default-branch","page":"Configuration Options","title":"Overriding the default branch","text":"","category":"section"},{"location":"options/","page":"Configuration Options","title":"Configuration Options","text":"By default, CompatHelper will open pull requests against your repository's default branch. If you would like to override this behavior, set the master_branch keyword argument. For example:","category":"page"},{"location":"options/","page":"Configuration Options","title":"Configuration Options","text":"CompatHelper.main(; master_branch = \"my-custom-branch\")","category":"page"},{"location":"","page":"Home","title":"Home","text":"CurrentModule = CompatHelper","category":"page"},{"location":"#[CompatHelper.jl](https://github.com/JuliaRegistries/CompatHelper.jl)","page":"Home","title":"CompatHelper.jl","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"CompatHelper is a Julia package that helps you keep your [compat] entries up-to-date.","category":"page"},{"location":"","page":"Home","title":"Home","text":"Whenever one of your package's dependencies releases a new breaking version, CompatHelper opens a pull request on your repository that modifies your [compat] entry to reflect the newly released version.","category":"page"},{"location":"","page":"Home","title":"Home","text":"We would like to eventually add Julia support to Dependabot, at which point we will deprecate CompatHelper in favor of Dependabot. If you would like to help with adding Julia support to Dependabot, join us in the #dependabot channel on the Julia Language Slack.","category":"page"},{"location":"#Installation,-step-1:-Create-the-workflow-file","page":"Home","title":"Installation, step 1: Create the workflow file","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Create a file at .github/workflows/CompatHelper.yml with the following contents:","category":"page"},{"location":"","page":"Home","title":"Home","text":"import CompatHelper\nimport Markdown\n\nconst root_directory = dirname(dirname(pathof(CompatHelper)))\nconst workflow_dir = joinpath(root_directory, \".github\", \"workflows\")\nconst workflow_filename = joinpath(workflow_dir, \"CompatHelper.yml\")\nconst workflow_filecontents = read(workflow_filename, String)\nconst str = string(\"```yaml\\n\", strip(workflow_filecontents), \"\\n```\")\nconst md = Markdown.parse(str)\nreturn md","category":"page"},{"location":"","page":"Home","title":"Home","text":"Note: Julia is available by default in the GitHub Actions virtual environments. Therefore, you do not need to manually install Julia.","category":"page"},{"location":"","page":"Home","title":"Home","text":"CompatHelper is now installed as a GitHub Action on your repository. But wait: do you fall into any of the following categories:","category":"page"},{"location":"","page":"Home","title":"Home","text":"You use GitHub Actions to test your package using continuous integration (CI).\nYou use GitHub Actions to build and deploy the documentation for your package.","category":"page"},{"location":"","page":"Home","title":"Home","text":"If you do not fall into any of those categories, then you are done! There is nothing more that you need to do.","category":"page"},{"location":"","page":"Home","title":"Home","text":"But if you do fall into one or more of those categories, then you also need to set up an SSH deploy key for CompatHelper to use. Read on:","category":"page"},{"location":"#Installation,-step-2:-Set-up-the-SSH-deploy-key","page":"Home","title":"Installation, step 2: Set up the SSH deploy key","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Note: if you already have an SSH deploy key set up in a secret, e.g. DOCUMENTER_KEY or FRANKLIN_PRIV, you can reuse it. See the \"Advanced notes\" section below.","category":"page"},{"location":"#Motivation","page":"Home","title":"Motivation","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"The default CompatHelper setup has one flaw: the pull requests that CompatHelper opens will not trigger any other GitHub Actions.","category":"page"},{"location":"","page":"Home","title":"Home","text":"Consider the following situations:","category":"page"},{"location":"","page":"Home","title":"Home","text":"You use GitHub Actions to test your package using continuous integration (CI).\nYou use GitHub Actions to build and deploy the documentation for your package.","category":"page"},{"location":"","page":"Home","title":"Home","text":"If any of those situations apply to you, then you will need to set up an SSH deploy key for CompatHelper. Once you have set up an SSH deploy key for CompatHelper, the pull requests that CompatHelper opens will trigger all of the usual GitHub Actions.","category":"page"},{"location":"","page":"Home","title":"Home","text":"If none of those situations apply to you, then you don't need to set up an SSH deploy key for CompatHelper.","category":"page"},{"location":"#Instructions-for-setting-up-the-SSH-deploy-key","page":"Home","title":"Instructions for setting up the SSH deploy key","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"It is easy to set up an SSH deploy key for CompatHelper. Here are the instructions:","category":"page"},{"location":"","page":"Home","title":"Home","text":"ssh-keygen -N \"\" -f compathelper_key\ncat compathelper_key # This is the private key. Copy this to your clipboard.\nGo to the GitHub page for your package's repository, click on the Settings tab, then click on Secrets, and then click on New repository secret. Name the secret COMPATHELPER_PRIV. For the contents, paste in the private key that you copied in the previous step.\ncat compathelper_key.pub # This is the public key. Copy this to your clipboard.\nGo to the GitHub page for your package's repository, click on the Settings tab, then click on Deploy keys, and then click on Add deploy key. Name the deploy key COMPATHELPER_PUB. For the contents, paste in the public key that you copied in the previous step. Make sure that you give the key write access.\nrm -f compathelper_key compathelper_key.pub","category":"page"},{"location":"#Advanced-notes","page":"Home","title":"Advanced notes","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"When you supply the private key, you can either provide the raw private key itself (as we did above), or you can provide the Base64-encoded form of the private key.","category":"page"},{"location":"","page":"Home","title":"Home","text":"For example, if you already have a Base64-encoded private key saved as a secret, you can re-use it. If e.g. the secret is named DOCUMENTER_KEY, then simply replace the line that looks like this:","category":"page"},{"location":"","page":"Home","title":"Home","text":"COMPATHELPER_PRIV: ${{ secrets.COMPATHELPER_PRIV }}","category":"page"},{"location":"","page":"Home","title":"Home","text":"with this line:","category":"page"},{"location":"","page":"Home","title":"Home","text":"COMPATHELPER_PRIV: ${{ secrets.DOCUMENTER_KEY }}","category":"page"}]
}
